import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import ImageDetail from './components/ImageDetail';

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
    <Router>
      <div className="App">
        <SearchBar onSearch={onSearchSubmit} />
        <Routes>
          <Route path="/" element={<ImageList images={images} />} />
          <Route path="/image/:id" element={<ImageDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
