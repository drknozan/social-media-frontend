import { Profile } from '@src/types/Profile';
import { Post } from '@src/types/Post';
import axios from 'axios';

export const getCurrentUserProfile = async (): Promise<Profile> => {
  const response = await axios.get(`http://localhost:3000/profile`, { withCredentials: true });

  return response.data;
};

export const getUserFeed = async (): Promise<Post[]> => {
  const response = await axios.get(`http://localhost:3000/feed`, { withCredentials: true });

  return response.data;
};
