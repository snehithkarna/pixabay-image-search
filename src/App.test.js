import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search input', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Search for images.../i);
  expect(searchInput).toBeInTheDocument();
});
