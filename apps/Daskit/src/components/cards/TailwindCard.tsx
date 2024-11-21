import React from 'react';
import { Palette } from 'lucide-react';

const TailwindCard: React.FC = () => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white dark:bg-gray-800">
      <div className="p-4 flex items-center gap-2">
        <Palette className="h-5 w-5 text-indigo-500" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Tailwind CSS
        </h3>
      </div>
      <div className="px-4 pb-4">
        <p className="text-gray-600 dark:text-gray-300">
          This card showcases Tailwind CSS utility classes for rapid UI development
          with a clean and modern design system.
        </p>
      </div>
    </div>
  );
};

export default TailwindCard;