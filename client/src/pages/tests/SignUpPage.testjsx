import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignUpPage from '../SignUpPage';
import { signupUser } from '../../api/authApi';

const renderSignUpPage = () => {
  render(
    <MemoryRouter>
      <SignUpPage />
    </MemoryRouter>
  );
};

describe('SignUpPage', () => {
  it('renders name, email, password and confirm password fields', () => {
    renderSignUpPage();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
  });
});

it('renders a sign up button', () => {
  renderSignUpPage();
  expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
});
