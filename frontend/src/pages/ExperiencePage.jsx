import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Calendar, Building, CheckCircle, GraduationCap, Briefcase } from 'lucide-react';
import { experience, education, certifications } from '../mockData';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Page Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey, educational background, and continuous learning path in technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Experience Section */}
            <div className="space-y-8">
              <div className="flex items-center mb-8">
                <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Professional Experience</h2>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                {experience.map((exp, index) => (
                  <div key={exp.id} className="relative pl-12 pb-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>

                    <Card className="group hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-800 shadow-md">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-200">
                              {exp.position}
                            </CardTitle>
                            <div className="flex items-center space-x-4 mt-2 text-gray-600 dark:text-gray-400">
                              <div className="flex items-center">
                                <Building className="h-4 w-4 mr-1" />
                                <span className="font-semibold text-blue-600 dark:text-blue-400">{exp.company}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.duration}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {exp.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-8">
              <div className="flex items-center mb-8">
                <GraduationCap className="h-6 w-6 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

                {education.map((edu, index) => (
                  <div key={edu.id} className="relative pl-12 pb-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>

                    <Card className="group hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-800 shadow-md">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors duration-200">
                              {edu.degree}
                            </CardTitle>
                            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                              <Building className="h-4 w-4 mr-1" />
                              <span className="font-semibold text-purple-600 dark:text-purple-400">{edu.institution}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className="bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 mb-2">
                              <Calendar className="h-3 w-3 mr-1" />
                              {edu.duration}
                            </Badge>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              CGPA: <span className="text-green-600 dark:text-green-400">{edu.cgpa}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white">Key Subjects:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.highlights.map((subject) => (
                              <Badge
                                key={subject}
                                variant="outline"
                                className="text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                              >
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Certifications
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Continuous learning and skill development through recognized certifications
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="group hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-800 shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mx-auto flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-lg">{cert.provider.slice(0, 2)}</span>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">{cert.provider}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{cert.year}</p>
                      </div>
                      
                      <div className="space-y-2">
                        {cert.certificates.map((certificate) => (
                          <Badge
                            key={certificate}
                            variant="outline"
                            className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 block w-full"
                          >
                            {certificate}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;