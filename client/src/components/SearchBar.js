import React from 'react';


/**
 * A component that renders a search bar input field.
 * @param {Object} props - The component props.
 * @param {string} props.query - The current search query.
 * @param {function} props.setQuery - A function to update the search query.
 * @returns {JSX.Element} - The rendered component.
 */
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