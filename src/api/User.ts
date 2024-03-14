import { Profile } from '@src/types/Profile';
import { Post } from '@src/types/Post';
import axios from 'axios';
import { User } from '@src/types/User';
import { Follow } from '@src/types/Follow';

export const getUser = async (username: string): Promise<User> => {
  const response = await axios.get(`http://localhost:3000/users/${username}`, { withCredentials: true });

  return response.data;
};

export const getCurrentUserProfile = async (): Promise<Profile> => {
  const response = await axios.get(`http://localhost:3000/profile`, { withCredentials: true });

  return response.data;
};

export const getUserFeed = async (): Promise<Post[]> => {
  const response = await axios.get(`http://localhost:3000/feed`, { withCredentials: true });

  return response.data;
};

export const followUser = async (username: string): Promise<Follow> => {
  const response = await axios.post(
    `http://localhost:3000/follow/${username}`,
    { username },
    { withCredentials: true },
  );

  return response.data;
};

export const unfollowUser = async (username: string): Promise<Follow> => {
  const response = await axios.post(
    `http://localhost:3000/unfollow/${username}`,
    { username },
    { withCredentials: true },
  );

  return response.data;
};

export const getFollowRecommendations = async (): Promise<User[]> => {
  const response = await axios.get(`http://localhost:3000/recommendations`, { withCredentials: true });

  return response.data;
};
