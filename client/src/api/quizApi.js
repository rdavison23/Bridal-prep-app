export async function sumbitQuiz(answers, quiz_version = 1, user_id = null) {
  const res = await fetch('/api/quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers, quiz_version, user_id }),
  });

  return res.json();
}
