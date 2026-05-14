const BASE_URL = 'http://localhost:3001/api'; // adjust if needed

async function apiClient(endpoint, options = {}) {
  const config = {
    credentials: 'include', // send cookies if you're using auth
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  };

  const res = await fetch(`${BASE_URL}${endpoint}`, config);

  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    throw new Error(data?.error || `API error: ${res.status}`);
  }

  return data;
}

export default apiClient;
