const API_BASE = import.meta.env.VITE_API_BASE || '';

async function request(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    ...options,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }

  return res.json();
}

export const api = {
  getProducts: () => request('/api/products'),
  getProduct: (id: number | string) => request(`/api/products/${id}`),
  login: (payload: unknown) => request('/api/auth/login', { method: 'POST', body: JSON.stringify(payload) }),
};

export default api;
