import apiClient from './apiClient';

export async function getAdminUsers() {
  try {
    return await apiClient('/api/admin/users', {});
  } catch (err) {
    console.error('Failed to fetch users:', err);
    throw new Error('Failed to fetch users.');
  }
}

export async function deleteAdminUser(userId) {
  try {
    return await apiClient(`/api/admin/users/${userId}`, {
      method: 'DELETE',
    });
  } catch (err) {
    console.error('Failed to delete user:', err);
    throw new Error('Failed to delete user.');
  }
}
