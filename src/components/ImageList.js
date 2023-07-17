import React from 'react';

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <img src={image.webformatURL} alt={image.tags} key={image.id} />
      ))}
    </div>
  );
}

export default ImageList;
