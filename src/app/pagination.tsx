import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex mt-5 pb-5 justify-center space-x-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-md transition duration-200 ease-in-out ${
            currentPage === page 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
