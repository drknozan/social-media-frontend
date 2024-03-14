import { Post } from '@src/types/Post';
import axios from 'axios';

export const getPost = async (slug: string): Promise<Post> => {
  const response = await axios.get(`http://localhost:3000/post/${slug}`, { withCredentials: true });

  return response.data;
};

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

export const createComment = async ({ slug, content }: { slug: string; content: string }): Promise<Comment> => {
  const response = await axios.post(
    `http://localhost:3000/post/${slug}/comment`,
    { content },
    { withCredentials: true },
  );

  return response.data;
};

export const upvotePost = async (slug: string): Promise<Post> => {
  const response = await axios.patch(`http://localhost:3000/post/${slug}/upvote`, null, { withCredentials: true });

  return response.data;
};

export const downvotePost = async (slug: string): Promise<Post> => {
  const response = await axios.patch(`http://localhost:3000/post/${slug}/downvote`, null, { withCredentials: true });

  return response.data;
};
