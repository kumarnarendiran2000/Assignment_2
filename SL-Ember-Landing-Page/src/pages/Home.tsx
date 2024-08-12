import React from 'react';
import Rewards from '../components/Rewards';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-left">Welcome Andy</h1>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute inset-x-0 top-0 h-3/5 bg-gray-900 z-0"></div>
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-blue-100 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4">
          <Rewards />
        </div>
      </div>
    </div>
  );
};

export default Home;
