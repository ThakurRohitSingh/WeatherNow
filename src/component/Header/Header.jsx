import React from 'react';
import { MdSearch, MdMyLocation } from 'react-icons/md';
import Logo from '../../images/logo.png';

const Header = () => {
  return (
    <header className="bg-blue-400 p-4 flex justify-between items-center rounded-md shadow-md">
      {/* Logo */}
      <a href="#" aria-label="Homepage" className="flex-shrink-0">
        <img src={Logo} alt="Logo" className="w-32 h-auto" />
      </a>

      {/* Search and Location Button */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="relative flex-grow max-w-lg sm:max-w-lg md:max-w-lg">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={25} />
          <input
            type="text"
            className="py-2 pl-10 pr-4 bg-white border border-white rounded-full w-full"
            placeholder="Search"
          />
        </div>

        {/* Location Button */}
        <a
          href="#/current-location"
          className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          <MdMyLocation size={30} />
          <span className="text-sm">Location</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
