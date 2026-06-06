import apiClient from './apiClient';

export async function getAdminUsers(token) {
    try {
        return apiClient('/api/admin/users', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },

        });
    } catch (err) {
        console.error('Failed to fetch users:', err);
        throw new Error('Failed to fetch users.');
    }
}

export async function deleteAdminUser(userId, token) {
    try {
        return apiClient(`/api/admin/users/${userId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },

        });
    } catch (err) {
        console.error('Failed to delete user:', err);
        throw new Error('Failed to delete user.');
    }
}
