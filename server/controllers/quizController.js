import { pool } from '../db.js';
import { fetchPexelsImages } from '../utils/pexelsClient.js';

// Simple placeholder logic
function computeStyleProfile(answers) {
  if (!answers || answers.length === 0) return 'Classic';
  return 'Romantic';
}

export async function handleQuizSubmission(req, res) {
  try {
    const { user_id, answers, quiz_version } = req.body;

    const style_profile = computeStyleProfile(answers);

    const images = await fetchPexelsImages(style_profile);

    await pool.query(
      `INSERT INTO quiz_results (user_id, style_profile, image_urls, quiz_version)
       VALUES ($1, $2, $3, $4)`,
      [user_id || null, style_profile, JSON.stringify(images), quiz_version]
    );

    return res.json({
      style_profile,
      images,
      quiz_version,
    });
  } catch (err) {
    console.error('Quiz error', err);
    return res.status(500).json({ error: 'Quiz processing failed' });
  }
}
