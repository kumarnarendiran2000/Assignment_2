import React from 'react';
import PensionInfo from '../components/Pensioninfo';

const Home: React.FC = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Welcome Andy</h1>
      <PensionInfo />
    </main>
  );
};

export default Home;
