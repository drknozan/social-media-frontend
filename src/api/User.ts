import { Profile } from '@src/types/Profile';
import axios from 'axios';

export const getCurrentUserProfile = async (): Promise<Profile> => {
  const response = await axios.get(`http://localhost:3000/profile`, { withCredentials: true });

  return response.data;
};
