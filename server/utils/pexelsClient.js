import dotenv from 'dotenv';
dotenv.config();

export async function fetchPexelsImages(style) {
  const queryMap = {
    romantic: 'romantic bridal wedding soft pastel lace',
    modern: 'modern minimalist bridal wedding sleek clean lines',
    classic: 'classic elegant bridal wedding timeless traditional',
    boho: 'boho bohemian bridal wedding earthy natural outdoor',
  };

  const query = queryMap[style] || 'bridal wedding';

  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      query
    )}&per_page=80`,
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    }
  );

  const data = await response.json();

  // Shuffle and take 8
  const shuffled = data.photos.sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 8);

  return selected.map((p) => p.src.large);
}
