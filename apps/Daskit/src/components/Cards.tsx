import React from 'react';
import MaterialCard from './cards/MaterialCard';
import TailwindCard from './cards/TailwindCard';
import StyledCard from './cards/StyledCard';

const Cards: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Styling Showcase
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Demonstrating various styling approaches in modern React development
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          <MaterialCard />
          <TailwindCard />
          <StyledCard />
        </div>
      </div>
    </section>
  );
};

export default Cards;