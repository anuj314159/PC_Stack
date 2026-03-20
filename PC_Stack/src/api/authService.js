import apiClient from '../api/apiClient';

export const authService = {
  async login(email, password) {
    // Using UserCreate schema structure as per backend login route
    const response = await apiClient.post('/auth/login', { email, password });
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