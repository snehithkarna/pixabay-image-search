import React from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for images..." 
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
