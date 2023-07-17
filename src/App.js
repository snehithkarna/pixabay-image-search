import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await axios.get('https://pixabay.com/api/', {
      params: { 
        key: '38264857-63ea054d0a056e3f320dde8da', 
        q: term 
      }
    });

    setImages(response.data.hits);
  };

  return (
    <div className="App">
      <SearchBar onSearch={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;

