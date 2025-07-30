import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { personalInfo, skills } from '../mockData';
import { Code, Database, Wrench, BookOpen, Brain, User, Target, Award } from 'lucide-react';

const AboutPage = () => {
  const skillCategories = [
    {
      id: 'frontend',
      label: 'Frontend',
      icon: Code,
      skills: skills.frontend,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: Database,
      skills: skills.backend,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'languages',
      label: 'Languages',
      icon: BookOpen,
      skills: skills.languages,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'tools',
      label: 'Tools',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'data',
      label: 'Data Science',
      icon: Brain,
      skills: skills.dataLibraries,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Page Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get to know me better - my background, skills, and what drives my passion for technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bio Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Professional Profile Card */}
              <div className="lg:col-span-1">
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0 text-center space-y-6">
                    <div className="relative">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-4xl font-bold text-white">
                          {personalInfo.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {personalInfo.name}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        {personalInfo.title}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                      {personalInfo.roles.slice(0, 3).map((role) => (
                        <Badge
                          key={role}
                          variant="secondary"
                          className="bg-white/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300"
                        >
                          {role}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Available for opportunities</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bio Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="flex items-center mb-6">
                    <User className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Story</h2>
                  </div>
                  <div className="prose prose-lg dark:prose-invert">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {personalInfo.bio}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      I'm passionate about leveraging cutting-edge technologies to solve real-world problems. 
                      My journey in technology has been driven by curiosity and a desire to create meaningful impact 
                      through innovative solutions.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <Target className="h-6 w-6 text-purple-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What I Do</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Full-Stack Development</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Building scalable web applications with modern frameworks and best practices.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI & Machine Learning</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Developing intelligent systems and data-driven solutions for complex problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
              </div>
            </div>

            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 rounded-lg transition-all duration-200"
                  >
                    <category.icon className="h-4 w-4 mr-2 hidden sm:inline" />
                    <span className="hidden sm:inline">{category.label}</span>
                    <span className="sm:hidden">{category.label.slice(0, 3)}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg mb-4`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.label} Skills
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {category.skills.map((skill, index) => (
                      <Card
                        key={skill}
                        className="group hover:shadow-md transition-shadow duration-200 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
                      >
                        <CardContent className="p-4 text-center">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {skill}
                          </span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '15+', label: 'Projects Completed' },
              { number: '10+', label: 'Technologies' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <Card
                key={stat.label}
                className="p-6 text-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
