const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function sumbitQuiz(answers, quiz_version = 1, user_id = null) {
  if (!API_BASE_URL) {
    throw new Error('VITE_API_BASE_URL is not defined');
  }
  const res = await fetch(`${API_BASE_URL}/api/quiz`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers, quiz_version, user_id }),
  });

  if (!res.ok) {
    throw new Error('Failed to submit quiz');
  }

  return res.json();
}
