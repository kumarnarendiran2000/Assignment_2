import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow w-full">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <img src="https://logos-world.net/wp-content/uploads/2023/05/Standard-Life-Logo.png" alt="Standard Life" className="h-20" />
        <button className="text-blue-500 flex items-center space-x-2">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
