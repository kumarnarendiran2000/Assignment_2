import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow w-full">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <img src="https://logos-world.net/wp-content/uploads/2023/05/Standard-Life-Logo.png" alt="Standard Life" className="h-16" />
        <button className="text-blue-500">Logout</button>
      </div>
    </header>
  );
}

export default Header;
