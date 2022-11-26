import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  screen.getByText(/Youtube/i);
});

test('renders input with placeholder', () => {
  render(<App />);
  screen.getByPlaceholderText(/Search.../i);
});

test('renders button with glass', () => {
  render(<App />);
  screen.getByTitle('search-icon');
});
