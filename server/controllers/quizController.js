import { pool } from '../db.js';
import { fetchPexelsImages } from '../utils/pexelsClient.js';

//will add real quiz logic later
function computeStyleProfile(answer) {
  if (!answers) return 'Classic';
  return 'Romantic'; //placeholder
}

export async function handleQuizSubmission(req, res) {
  try {
    const { user_id, answers, quiz_versio } = req.body;

    const style_profile = computeStyleProfile(answers);

    const images = await fetchPexelsImages(style_profile);

    await pool.query(
      ` INSERT INTO  quiz_results (user_id, style_profile, image_urls, quiz_verstion)
            VALUES ($1, $2, $3, $4)`[
        (user_id || null, style_profile, images, quiz_versio)
      ]
    );

    res.json({
      style_profile,
      images,
      quiz_versio,
    });
  } catch (err) {
    console.log('Quiz error', err);
    res.status(500).json({ error: 'Quiz processing failed' });
  }
}
