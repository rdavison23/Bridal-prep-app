import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../LoginPage';

const renderLoginPage = () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
};

describe('LoginPage', () => {
  it('renders email and password fields', () => {
    renderLoginPage();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });
});

describe('LoginPage', () => {
  it('renders email and password fields', () => {
    renderLoginPage();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('shows error when email is empty', () => {
    renderLoginPage();
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });
});
