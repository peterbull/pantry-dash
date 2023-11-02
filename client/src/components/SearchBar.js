import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;