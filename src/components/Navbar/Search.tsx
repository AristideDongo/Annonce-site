'use client';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
    onSearch: (query: string) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch(query); // Appel de la fonction de recherche
    };
return (
    <div className="relative">
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchQuery}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FiSearch className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
