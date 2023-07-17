import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import ImageDetail from './components/ImageDetail';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 12;
  const [error, setError] = useState(null); // Add a state for holding API errors

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: { 
            key: '38264857-63ea054d0a056e3f320dde8da', 
            q: searchTerm,
            page: page,
            per_page: perPage
          }
        });
        setImages(response.data.hits);
      } catch(err) {
        setError(err); 
      }
    };
    fetchImages();
  }, [searchTerm, page]);

  const onSearchSubmit = (term) => {
    setSearchTerm(term);
  };

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setPage(prevPage => prevPage > 1 ? prevPage - 1 : 1);
  };

  return (
    <Router>
      <div className="App">
        <SearchBar onSearch={onSearchSubmit} />
        {error && <p>Error: {error.message}</p>} {}
        <Routes>
          <Route path="/" element={<ImageList images={images} />} />
          <Route path="/image/:id" element={<ImageDetail />} />
        </Routes>
        <Pagination page={page} prevPage={prevPage} nextPage={nextPage} />
      </div>
    </Router>
  );
}

export default App;
