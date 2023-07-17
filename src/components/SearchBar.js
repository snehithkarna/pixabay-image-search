import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <form onSubmit={onSubmit} className="search-bar">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for images..."
        className="search-bar-input" 
      />
      <button type="submit" className="search-bar-button">Search</button>
    </form>
  );
}

export default SearchBar;
