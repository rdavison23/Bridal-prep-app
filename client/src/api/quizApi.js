export async function sumbitQuiz(answers, quiz_version = 1, user_id = null) {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/quiz`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers, quiz_version, user_id }),
  });

  if (!res.ok) {
    throw new Error('Failed to submit quiz');
  }

  return res.json();
}
