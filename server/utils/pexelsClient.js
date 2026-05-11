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
    )}&per_page=6`,
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    }
  );

  const data = await response.json();

  return data.photos.map((p) => p.src.large);
}
