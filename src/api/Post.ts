import { Post } from '@src/types/Post';
import axios from 'axios';

export const createPost = async ({
  communityName,
  title,
  content,
}: {
  communityName: string;
  title: string;
  content: string;
}): Promise<Post> => {
  const response = await axios.post(
    'http://localhost:3000/post/create',
    { communityName, title, content },
    { withCredentials: true },
  );

  return response.data;
};
