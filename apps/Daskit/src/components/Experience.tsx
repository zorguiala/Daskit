import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Experience & Education
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Work Experience */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-indigo-500 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Senior Front-End Engineer</h4>
                <p className="text-indigo-600 dark:text-indigo-400">Toptal</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2020 - Present</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Led front-end development for major client projects</li>
                  <li>Reduced technical debt by 40% through code modernization</li>
                  <li>Implemented comprehensive testing strategies</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Front-End Developer</h4>
                <p className="text-indigo-600 dark:text-indigo-400">AKEOPLUS</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2018 - 2020</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Developed responsive web applications</li>
                  <li>Optimized UI performance by 60%</li>
                  <li>Mentored junior developers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-indigo-500 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Master's in Computer Science</h4>
                <p className="text-indigo-600 dark:text-indigo-400">Technical University</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2016 - 2018</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Specialized in Web Technologies and Software Engineering
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor's in Software Engineering</h4>
                <p className="text-indigo-600 dark:text-indigo-400">State University</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2012 - 2016</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Focus on Programming and Software Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;