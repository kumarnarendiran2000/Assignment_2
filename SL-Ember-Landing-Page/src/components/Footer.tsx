import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full pt-8">
      <div className="w-full">
        <div className="h-3 bg-yellow-500 rounded-r-full w-[95%]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center text-left">
          <div className="w-full md:w-auto">
            <img src="https://logos-world.net/wp-content/uploads/2023/05/Standard-Life-Logo.png" alt="Standard Life" className="h-14 mb-4" />
            <p className="text-xs text-gray-600">Part of Phoenix Group</p>
            <p className="text-xs text-gray-600">Proud to be part of the UK's largest long-term savings and retirement business.</p>
          </div>

          <div className="w-full md:w-auto">
            <h3 className="font-bold">Support</h3>
            <p><a href="#" className="text-blue-500">Contact us</a></p>
            <p><a href="#" className="text-blue-500">FAQs</a></p>
            <p><a href="#" className="text-blue-500">Statement</a></p>
          </div>

          <div className="w-full md:w-auto">
            <div className="text-blue-500 mb-2">Connect with us</div>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500"><FaFacebookF /></a>
              <a href="#" className="text-blue-500"><FaTwitter /></a>
              <a href="#" className="text-blue-500"><FaLinkedinIn /></a>
              <a href="#" className="text-blue-500"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="border-b border-blue-500 mb-4"></div>
        <div className="mt-4 flex flex-col md:flex-row justify-start md:justify-start items-start text-left">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0">
            <a href="#" className="text-blue-500">Accessibility</a>
            <a href="#" className="text-blue-500 md:ml-4">Legal information</a>
            <a href="#" className="text-blue-500 md:ml-4">Privacy Policy</a>
            <a href="#" className="text-blue-500 md:ml-4">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
