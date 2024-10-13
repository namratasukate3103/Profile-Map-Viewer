import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input 
      type="text" 
      placeholder="Search profiles..." 
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchBar;