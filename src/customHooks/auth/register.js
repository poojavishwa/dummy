// api.js
import axios from 'axios';

export const postRegister = async (data) => {
  try {
    const response = await axios.post('https://fakestoreapi.com/users', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const postLogin = async (data) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };

  export const getUser = async (userId) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/users/${userId}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  };

  export const updateUser = async (userId, userData) => {
    try {
      const response = await axios.put(`https://your-api-endpoint.com/users/${userId}`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };