import { pool } from '../db.js';
import { fetchPexelsImages } from '../utils/pexelsClient.js';

// Simple placeholder logic
function computeStyleProfile(answers) {
  const scores = {
    Romantic: 0,
    Modern: 0,
    Classic: 0,
    Boho: 0,
  };

  //Each answer contributes to a style
  answers.forEach((answer) => {
    if (scores[answer.style] !== undefined) {
      scores[answer.style] += 1;
    }
  });

  //Find the highest scoring style
  let finalStyle = 'Romantic';
  let maxScore = -1;

  for (const style in scores) {
    if (scores[style] > maxScore) {
      maxScore = scores[style];
      finalStyle = style;
    }
  }

  return finalStyle;
}

export async function handleQuizSubmission(req, res) {
  try {
    const { userId, answers, quizVersion } = req.body;

    const styleProfile = computeStyleProfile(answers);

    // Fetch images based on computed style
    const images = await fetchPexelsImages(styleProfile);

    await pool.query(
      `INSERT INTO bridal_prep.quiz_results (user_id, style_profile, image_urls, quiz_version)
       VALUES ($1, $2, $3, $4)`,
      [userId || null, styleProfile, images, quizVersion]
    );

    return res.json({
      styleProfile,
      images,
      quizVersion,
    });
  } catch (err) {
    console.error('Quiz error', err);
    return res.status(500).json({ error: 'Quiz processing failed' });
  }
}
