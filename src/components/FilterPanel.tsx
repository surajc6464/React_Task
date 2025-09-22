import React, { useState } from 'react';
import { FaListUl } from 'react-icons/fa';

const FilterPanel: React.FC = () => {

  const [sortOption, setSortOption] = useState('Name');

  const [itemsToShow, setItemsToShow] = useState(12);

 
  const sortOptions = ['Name', 'Date', 'Price'];
  const showOptions = [6, 12, 24];

  return (
    <div className="flex items-center justify-between p-3 bg-[#F6F7F9] rounded-lg shadow-sm mt-5">
      <div className="flex items-center space-x-4 text-black">
       
        <span className="text-sm">13 Items</span>

        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort By</span>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Show Items Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm">Show</span>
          <select
            value={itemsToShow}
            onChange={(e) => setItemsToShow(Number(e.target.value))}
            className="p-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {showOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* View Toggles */}
      <div className="flex items-center space-x-2">
        <button className="p-2 text-blue-500 border border-blue-500 rounded-lg">
          {/* Grid View Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 8h4V4H4v4zm6 0h4V4h-4v4zm6 0h4V4h-4v4zM4 14h4v-4H4v4zm6 0h4v-4h-4v4zm6 0h4v-4h-4v4zM4 20h4v-4H4v4zm6 0h4v-4h-4v4zm6 0h4v-4h-4v4z"></path>
          </svg>
        </button>
        <button className="p-2 text-gray-400">
          {/* List View Icon */}
         <FaListUl />
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;