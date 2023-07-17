import React from 'react';
import { Link } from 'react-router-dom';
import './ImageList.css';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <Link to={`/image/${image.id}`} key={image.id} className="image-list-item">
          <img src={image.webformatURL} alt={image.tags} className="image-list-img" />
        </Link>
      ))}
    </div>
  );
}

export default ImageList;
