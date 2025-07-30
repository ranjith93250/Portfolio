import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar, Building, CheckCircle } from 'lucide-react';
import { experience, education } from '../mockData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in technology and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Building className="mr-3 h-6 w-6 text-blue-600" />
              Professional Experience
            </h3>

            <div className="relative">
              {/* Professional Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

              {experience.map((exp, index) => (
                <div key={exp.id} className="relative pl-12 pb-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-md"></div>

                  <Card className="group hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-900 shadow-md">
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <svg className="mr-3 h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

              {education.map((edu, index) => (
                <div key={edu.id} className="relative pl-12 pb-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-md"></div>

                  <Card className="group hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-900 shadow-md">
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

        {/* Professional Certifications Preview */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'HackerRank', badge: 'SQL Expert', color: 'bg-green-500' },
              { name: 'Cisco', badge: 'CCNA', color: 'bg-blue-500' },
              { name: 'Great Learning', badge: 'DevOps', color: 'bg-purple-500' },
              { name: 'Pearson', badge: 'Level 10', color: 'bg-orange-500' }
            ].map((cert, index) => (
              <Card
                key={cert.name}
                className="group hover:shadow-md transition-shadow duration-300 border-0 bg-white dark:bg-gray-900 shadow-sm"
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${cert.color} rounded-lg mx-auto mb-3 flex items-center justify-center shadow-sm`}>
                    <span className="text-white font-bold text-sm">{cert.name.slice(0, 2)}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{cert.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{cert.badge}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;