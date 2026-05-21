import apiClient from './apiClient';

// POST /api/budget/preview  (calculate only, no save)
export async function previewBudget(data) {
  return apiClient('/api/budget/preview', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// POST /api/budget  (save to DB)
export async function createBudget(data) {
  return apiClient('/api/budget', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// GET /api/budget/latest  (get last saved budget)
export async function getLatestBudget() {
  return apiClient('/api/budget/latest', {
    method: 'GET',
  });
}
