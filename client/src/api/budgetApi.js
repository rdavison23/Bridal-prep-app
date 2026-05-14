import apiClient from './apiClient';

// POST /api/budget/preview  (calculate only, no save)
export async function previewBudget(data) {
  return apiClient('/budget/preview', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// GET /api/budget/latest  (get last saved budget)
export async function getLatestBudget() {
  return apiClient('/budget/latest', {
    method: 'GET',
  });
}
