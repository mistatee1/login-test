import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);
    // Check input form and button exist
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
});
