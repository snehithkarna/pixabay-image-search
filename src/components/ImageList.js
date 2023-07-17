import React from 'react';
import { Link } from 'react-router-dom';

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <Link to={`/image/${image.id}`} key={image.id}>
          <img src={image.webformatURL} alt={image.tags} />
        </Link>
      ))}
    </div>
  );
}

export default ImageList;
