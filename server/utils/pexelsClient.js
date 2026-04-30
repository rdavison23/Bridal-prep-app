import dotenv from 'dotenv';
dotenv.config();

export async function fetchPexelsImages(styleKeyword) {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${styleKeyword}+bridal+dress&per_page=6`,
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    }
  );

  const data = await response.json();
  return data.photos.map((p) => p.src.medium);
}
