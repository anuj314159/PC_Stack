import apiClient from './apiClient';

export const authService = {
  async login(email, password) {
    // Send OAuth2-friendly form-encoded payload, and backend also accepts JSON
    const formParams = new URLSearchParams();
    formParams.append('username', email);
    formParams.append('password', password);

    const response = await apiClient.post('/auth/login', formParams, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
    }
    return response.data;
  },

  async register(userData) {
    return await apiClient.post('/auth/register', userData);
  },
  async getMe() {
    const response = await apiClient.get('/auth/me');
    return response.data;
  },

  logout() {
    localStorage.removeItem('token');
  },

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
};
