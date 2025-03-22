import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const blogAPI = {
  getAll: async (page = 1, limit = 9) => {
    try {
      const response = await api.get(`/posts?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  getById: async (id) => {
    try {
      const response = await api.get(`/posts/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  create: async (postData) => {
    try {
      const response = await api.post('/posts', postData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  update: async (id, postData) => {
    try {
      const response = await api.put(`/posts/${id}`, postData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  delete: async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      return true;
    } catch (error) {
      throw error;
    }
  }
};

export default api;
