const BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function apiClient(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const { headers: extraHeaders, ...restOptions } = options;

  const config = {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(extraHeaders || {}),
    },
    ...restOptions,
  };

  const res = await fetch(`${BASE_URL}${endpoint}`, config);

  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    if (res.status === 404 && data?.empty) {
      return data;
    }
    throw new Error(data?.error || `API error: ${res.status}`);
  }
  return data;
}

export default apiClient;
