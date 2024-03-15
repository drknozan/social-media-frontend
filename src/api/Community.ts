import { Community } from '@src/types/Community';
import axios from 'axios';

export const getCommunity = async (communityName: string): Promise<Community> => {
  const response = await axios.get(`http://localhost:3000/communities/${communityName}`, { withCredentials: true });

  return response.data as Community;
};

export const joinCommunity = async (communityName: string): Promise<Community> => {
  const response = await axios.post(
    `http://localhost:3000/communities/${communityName}/join`,
    { communityName },
    { withCredentials: true },
  );

  return response.data;
};

export const leaveCommunity = async (communityName: string): Promise<Community> => {
  const response = await axios.post(
    `http://localhost:3000/communities/${communityName}/leave`,
    { communityName },
    { withCredentials: true },
  );

  return response.data;
};

export const createCommunity = async ({
  communityName,
  description,
}: {
  communityName: string;
  description: string;
}): Promise<Community> => {
  const response = await axios.post(
    'http://localhost:3000/communities/create',
    { communityName, description },
    { withCredentials: true },
  );

  return response.data as Community;
};

export const getCommunities = async ({
  query,
  offset,
  limit,
}: {
  query: string;
  offset: string;
  limit: string;
}): Promise<{ result: Community[]; count: number }> => {
  const response = await axios.get(
    `http://localhost:3000/search/communities?q=${query}&offset=${offset}&limit=${limit}`,
    { withCredentials: true },
  );

  return response.data as { result: Community[]; count: number };
};

export const getTopCommunities = async (): Promise<Community[]> => {
  const response = await axios.get(`http://localhost:3000/search/communities?q=${''}&offset=${0}&limit=${10}`, {
    withCredentials: true,
  });

  return response.data.result as Community[];
};
