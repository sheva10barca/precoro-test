import axios from 'axios';

const BASE_URL =
  'https://precoro-react-native-test-task-api.avramch.workers.dev';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth`, {
      username: email,
      password,
    });

    if (response.status === 200) {
      const authToken = response.data.token;

      return authToken;
    } else {
      console.error('Authentication failed');
    }
  } catch (error) {
    throw new Error('Authentication error');
  }
};

export const getPurchaseOrders = async (authToken: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/purchaseorders`, {
      headers: {
        'X-Auth-Token': authToken,
        'Content-Type': 'application/json',
      },
    });

    const data = response.data.data;

    return data;
  } catch (error) {
    throw new Error('Error fetching documents');
  }
};
