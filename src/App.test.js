import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  screen.getByText(/Youtube/i);
});

test('renders input with place holder', () => {
  render(<App />);
  screen.getAllByText(/Search.../i);
});
