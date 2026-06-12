import { pool } from '../db.js';
import { fetchPexelsImages } from '../utils/pexelsClient.js';

// Simple placeholder logic
function computeStyleProfile(answers) {
  const scores = {
    romantic: 0,
    modern: 0,
    classic: 0,
    boho: 0,
  };

  answers.forEach((answer) => {
    if (scores[answer.style] !== undefined) {
      scores[answer.style] += 1;
    }
  });

  let finalStyle = 'romantic';
  let maxScore = -1;

  for (const style in scores) {
    if (scores[style] > maxScore) {
      maxScore = scores[style];
      finalStyle = style;
    }
  }

  console.log('Final computed style:', finalStyle);

  return finalStyle;
}

export async function handleQuizSubmission(req, res) {
  console.log(req);
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
