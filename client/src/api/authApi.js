import apiClient from './apiClient';

// POST /api/signup
export async function signupUser(data) {
  try {
    return await apiClient('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error('Failed to sign up:', err);
    throw new Error('Unable to signup. Please try again.');
  }
}

// POST /api/login
export async function loginUser(data) {
  try {
    return await apiClient('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error('Failed to Log in:', err);
    throw new Error('Unable to Log in. Please try again.');
  }
}

//GET /api/auth/me
export async function getMe() {
  return apiClient('/api/auth/me', {});
}
