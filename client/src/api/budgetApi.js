import apiClient from './apiClient';

export async function getLatestBudget() {
  const res = await apiClient.get('/budget/latest');
  return res.data.budget;
}
