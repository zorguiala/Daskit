import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Languages' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'Jest', level: 88, category: 'Testing' },
  { name: 'Cypress', level: 85, category: 'Testing' },
  { name: 'Tailwind CSS', level: 92, category: 'Styling' },
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Technical proficiency across various modern web technologies
          </p>
        </div>

        <div className="mt-16 grid gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 inline-block">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;