import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);

  // Check input form and button exist
  expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('email and password input updates when user changes value', async () => {
  render(<App />);

  const emailInput = screen.getByPlaceholderText('Enter your email');
  const passwordInput = screen.getByPlaceholderText('Enter your password');

  // fill out the form
  fireEvent.change(emailInput, {
    target: { value: 'test@test.com' },
  });

  fireEvent.change(passwordInput, {
    target: { value: '123456' },
  });

  // test input values updates
  expect(emailInput).toHaveValue("test@test.com");
  expect(passwordInput).toHaveValue("123456");


})
