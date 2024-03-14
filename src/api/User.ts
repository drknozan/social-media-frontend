import { Profile } from '@src/types/Profile';
import { Post } from '@src/types/Post';
import axios from 'axios';
import { User } from '@src/types/User';

export const getCurrentUserProfile = async (): Promise<Profile> => {
  const response = await axios.get(`http://localhost:3000/profile`, { withCredentials: true });

  return response.data;
};

export const getUserFeed = async (): Promise<Post[]> => {
  const response = await axios.get(`http://localhost:3000/feed`, { withCredentials: true });

  return response.data;
};

export const followUser = async (username: string): Promise<User> => {
  const response = await axios.post(
    `http://localhost:3000/follow/${username}`,
    { username },
    { withCredentials: true },
  );

  return response.data;
};

export const unfollowUser = async (username: string): Promise<User> => {
  const response = await axios.post(
    `http://localhost:3000/unfollow/${username}`,
    { username },
    { withCredentials: true },
  );

  return response.data;
};
