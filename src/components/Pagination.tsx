import React, { useState } from "react";

const Pagination: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const pageNumbers = [1, 2, 3, 4, 5];

  return (
    <div className="bg-[#F6F7F9] shadow-sm mt-5 py-3">
      {/* Center pagination buttons */}
      <div className="flex justify-center items-center space-x-2">
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setPageNumber(num)}
            className={`px-3 py-1 text-sm rounded-md transition ${
              pageNumber === num
                ? "bg-blue-500 text-white"
                : "text-black    hover:bg-gray-100"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
