import apiClient from './apiClient';

export const getChecklist = async (userId) => {
  try {
    return await apiClient(`/api/checklist/${userId}`);
  } catch (err) {
    console.error(' Failed to load checklist:', err);
    throw new Error('Unable to load checklist. Please try again.');
  }
};

export const toggleChecklistItem = async (userId, itemId) => {
  try {
    return await apiClient(`/api/checklist/${userId}/${itemId}`, {
      method: 'PATCH',
    });
  } catch (err) {
    console.error(' Failed to toggle checklist item:', err);
    throw new Error('Unable to update checklist item. Please try again.');
  }
};

export const addChecklistItem = async (userId, item_text) => {
  try {
    return await apiClient(`/api/checklist/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_text }),
    });
  } catch (err) {
    console.error(' Failed to add checklist item:', err);
    throw new Error('Unable to add checklist item. Please try again.');
  }
};

export const deleteChecklistItem = async (userId, itemId) => {
  try {
    return await apiClient(`/api/checklist/${userId}/${itemId}`, {
      method: 'DELETE',
    });
  } catch (err) {
    console.error('Failed to delete checklist item:', err);
    throw new Error('Unable to delete checklist item. Please try again.');
  }
};

export const resetChecklist = async (userId) => {
  try {
    return await apiClient(`/api/checklist/${userId}/reset`, {
      method: 'POST',
    });
  } catch (err) {
    console.error('Failed to delete checklist item:', err);
    throw new Error('Unable to delete checklist item. Please try again.');
  }
};
