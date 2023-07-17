import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ImageDetail() {
  const [image, setImage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(`https://pixabay.com/api/?key=38264857-63ea054d0a056e3f320dde8da&id=${id}`);
      setImage(response.data.hits[0]);
    };

    fetchImage();
  }, [id]);

  if (!image) return 'Loading...';

  return (
    <div>
      <h1>{image.user}</h1>
      <img src={image.webformatURL} alt={image.tags} />
      <p>{image.tags}</p>
    </div>
  );
}

export default ImageDetail;
