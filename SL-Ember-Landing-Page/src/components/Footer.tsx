import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">&copy; 2024 Standard Life, All rights reserved.</p>
            <p className="text-sm">Part of Phoenix Group</p>
            <p className="text-sm">Proud to be part of the UK's largest long-term savings and retirement business.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500">Contact us</a>
            <a href="#" className="text-blue-500">FAQ</a>
            <a href="#" className="text-blue-500">Statement</a>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm">
            <a href="#" className="text-blue-500">Accessibility</a>
            <a href="#" className="text-blue-500 ml-4">Legal information</a>
            <a href="#" className="text-blue-500 ml-4">Privacy Policy</a>
            <a href="#" className="text-blue-500 ml-4">Cookie Policy</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500">Facebook</a>
            <a href="#" className="text-blue-500">Twitter</a>
            <a href="#" className="text-blue-500">LinkedIn</a>
            <a href="#" className="text-blue-500">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
