import axios from 'axios';

const BASE_URL = 'https://64510611a32219691158806c.mockapi.io';

export const fetchTweets = async page => {
  const response = await axios.get(`${BASE_URL}/tweets?limit=3&page=${page}`);
  return response.data;
};

export const changeFollowers = async (id, followers) => {
  const response = await axios.put(`${BASE_URL}/tweets/${id}`, {
    followers,
  });
  return response.data;
};
