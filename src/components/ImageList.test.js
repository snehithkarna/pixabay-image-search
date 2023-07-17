import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ImageList from './ImageList';

test('renders ImageList with images and checks functionality', () => {
  const mockImages = [
    { id: '1', webformatURL: 'http://test1.com', tags: 'tag1' },
    { id: '2', webformatURL: 'http://test2.com', tags: 'tag2' },
  ];

  render(
    <BrowserRouter>
      <ImageList images={mockImages} currentPage={1} setCurrentPage={() => {}} />
    </BrowserRouter>
  );

  // Check if images are rendered
  const images = screen.getAllByRole('img');
  expect(images).toHaveLength(2);

  // Check if images have correct src and alt attributes
  expect(images[0]).toHaveAttribute('src', 'http://test1.com');
  expect(images[0]).toHaveAttribute('alt', 'tag1');

  expect(images[1]).toHaveAttribute('src', 'http://test2.com');
  expect(images[1]).toHaveAttribute('alt', 'tag2');
});
