import apiClient from './apiClient';

export const getChecklist = async (userId) => {
  const res = await apiClient.get(`/checklist/${userId}`);
  return res.data;
};

export const toggleChecklistItem = async (itemId) => {
  const res = await apiClient.put(`/checklist/toggle/${itemId}`);
  return res.data;
};

export const addChecklistItem = async (userId, item_text) => {
  const res = await apiClient.post(`/checklist/${userId}`, { item_text });
  return res.data;
};
