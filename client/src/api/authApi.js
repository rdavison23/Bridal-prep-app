import apiClient from './apiClient'

export const getMe = async (token) => {
    return apiClient('/api/auth/me', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}