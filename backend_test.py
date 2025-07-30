#!/usr/bin/env python3
"""
Backend API Testing Suite for Portfolio Website
Tests the FastAPI backend endpoints and functionality
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Get backend URL - use localhost for internal testing
BACKEND_URL = "http://localhost:8001"
API_BASE = f"{BACKEND_URL}/api"

def test_health_check():
    """Test the root endpoint /api/ that returns Hello World"""
    print("🔍 Testing Health Check Endpoint...")
    try:
        response = requests.get(f"{API_BASE}/")
        print(f"   Status Code: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("   ✅ Health check passed")
                return True
            else:
                print("   ❌ Health check failed - incorrect message")
                return False
        else:
            print("   ❌ Health check failed - wrong status code")
            return False
    except Exception as e:
        print(f"   ❌ Health check failed - Exception: {e}")
        return False

def test_cors_configuration():
    """Test CORS configuration by checking headers"""
    print("🔍 Testing CORS Configuration...")
    try:
        response = requests.options(f"{API_BASE}/", headers={
            'Origin': 'http://localhost:3000',
            'Access-Control-Request-Method': 'GET'
        })
        print(f"   Status Code: {response.status_code}")
        
        cors_headers = {
            'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
            'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
            'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
        }
        print(f"   CORS Headers: {cors_headers}")
        
        # Check if CORS is properly configured
        if cors_headers['Access-Control-Allow-Origin'] in ['*', 'http://localhost:3000']:
            print("   ✅ CORS configuration is working")
            return True
        else:
            print("   ❌ CORS configuration may have issues")
            return False
    except Exception as e:
        print(f"   ❌ CORS test failed - Exception: {e}")
        return False

def test_create_status_check():
    """Test POST /api/status endpoint"""
    print("🔍 Testing Create Status Check Endpoint...")
    try:
        test_data = {
            "client_name": "Portfolio Test Client"
        }
        
        response = requests.post(f"{API_BASE}/status", json=test_data)
        print(f"   Status Code: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("client_name") == test_data["client_name"] and "id" in data and "timestamp" in data:
                print("   ✅ Create status check passed")
                return True, data.get("id")
            else:
                print("   ❌ Create status check failed - incorrect response format")
                return False, None
        else:
            print("   ❌ Create status check failed - wrong status code")
            return False, None
    except Exception as e:
        print(f"   ❌ Create status check failed - Exception: {e}")
        return False, None

def test_get_status_checks():
    """Test GET /api/status endpoint"""
    print("🔍 Testing Get Status Checks Endpoint...")
    try:
        response = requests.get(f"{API_BASE}/status")
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Found {len(data)} status checks")
            
            # Verify response format
            if isinstance(data, list):
                if len(data) > 0:
                    # Check first item structure
                    first_item = data[0]
                    if "id" in first_item and "client_name" in first_item and "timestamp" in first_item:
                        print("   ✅ Get status checks passed")
                        return True
                    else:
                        print("   ❌ Get status checks failed - incorrect item format")
                        return False
                else:
                    print("   ✅ Get status checks passed (empty list)")
                    return True
            else:
                print("   ❌ Get status checks failed - response is not a list")
                return False
        else:
            print("   ❌ Get status checks failed - wrong status code")
            return False
    except Exception as e:
        print(f"   ❌ Get status checks failed - Exception: {e}")
        return False

def test_database_connection():
    """Test database connection by creating and retrieving data"""
    print("🔍 Testing Database Connection...")
    
    # Create a test record
    create_success, test_id = test_create_status_check()
    if not create_success:
        print("   ❌ Database connection test failed - could not create record")
        return False
    
    # Retrieve records to verify persistence
    get_success = test_get_status_checks()
    if not get_success:
        print("   ❌ Database connection test failed - could not retrieve records")
        return False
    
    print("   ✅ Database connection is working")
    return True

def test_server_response():
    """Test if server is responding correctly"""
    print("🔍 Testing Server Response...")
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        if response.status_code in [200, 404, 405]:  # Any response means server is up
            print(f"   ✅ Server is responding (Status: {response.status_code})")
            return True
        else:
            print(f"   ❌ Server response unexpected (Status: {response.status_code})")
            return False
    except requests.exceptions.ConnectionError:
        print("   ❌ Server is not responding - Connection Error")
        return False
    except requests.exceptions.Timeout:
        print("   ❌ Server is not responding - Timeout")
        return False
    except Exception as e:
        print(f"   ❌ Server response test failed - Exception: {e}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("=" * 60)
    print("🚀 BACKEND API TESTING SUITE")
    print("=" * 60)
    print(f"Testing Backend URL: {API_BASE}")
    print()
    
    test_results = {}
    
    # Test 1: Server Response
    test_results['server_response'] = test_server_response()
    print()
    
    # Test 2: Health Check
    test_results['health_check'] = test_health_check()
    print()
    
    # Test 3: CORS Configuration
    test_results['cors_config'] = test_cors_configuration()
    print()
    
    # Test 4: Create Status Check
    test_results['create_status'] = test_create_status_check()[0]
    print()
    
    # Test 5: Get Status Checks
    test_results['get_status'] = test_get_status_checks()
    print()
    
    # Test 6: Database Connection
    test_results['database_connection'] = test_database_connection()
    print()
    
    # Summary
    print("=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
        if result:
            passed += 1
    
    print()
    print(f"Overall Result: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests passed!")
        return True
    else:
        print("⚠️  Some backend tests failed!")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)