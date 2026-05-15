import apiClient from './apiClient';

export const getChecklist = (userId) => apiClient(`/checklist/${userId}`);

export const toggleChecklistItem = (itemId) =>
  apiClient(`/checklist/toggle/${itemId}`, {
    method: 'PUT',
  });

export const addChecklistItem = (userId, item_text) =>
  apiClient(`/checklist/${userId}`, {
    method: 'POST',
    body: JSON.stringify({ item_text }),
  });
