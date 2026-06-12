import apiClient from './apiClient';

export async function submitQuiz(payload) {
  return apiClient('/api/quiz', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
