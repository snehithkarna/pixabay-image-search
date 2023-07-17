import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

test('renders SearchBar and checks if it functions correctly', async () => {
  render(<SearchBar onSearch={() => {}} />);

  // Check if input field is rendered
  const inputField = screen.getByPlaceholderText('Search for images...');
  expect(inputField).toBeInTheDocument();

  // Simulate user typing in the search field
  userEvent.type(inputField, 'nature');

  // Assert that the search field value has been updated
  await waitFor(() => {
    expect(inputField).toHaveValue('nature');
  });
});
