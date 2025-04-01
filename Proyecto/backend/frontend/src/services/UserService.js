import axios from 'axios';

const API_URL = 'http://localhost:8000/api/users/';

export default {
  getUsers() {
    return axios.get(API_URL);
  },
  createUser(userData) {
    return axios.post(API_URL, userData);
  },
  updateUser(userId, userData) {
    return axios.put(`${API_URL}${userId}/`, userData);
  },
  deleteUser(userId) {
    return axios.delete(`${API_URL}${userId}/`);
  }
};
