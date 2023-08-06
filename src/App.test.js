import { render, screen } from '@testing-library/react';
import App from './App';

test('renders registration form', () => {
  render(<App />);
  const form = screen.getByText("First Name");
  expect(form).toBeInTheDocument();
});
