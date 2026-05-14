const BASE_URL = import.meta.env.VITE_API_URL;

async function apiClient(endpoint, options = {}) {
  const config = {
    credentials: 'include',
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
