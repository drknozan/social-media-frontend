import { Post } from '@src/types/Post';
import { Comment } from '@src/types/Comment';
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
    `http://localhost:3000/posts/${slug}/comment`,
    { content },
    { withCredentials: true },
  );

  return response.data;
};

export const deleteComment = async ({ slug, commentId }: { slug: string; commentId: string }): Promise<Comment> => {
  const response = await axios.delete(`http://localhost:3000/posts/${slug}/${commentId}`, { withCredentials: true });

  return response.data;
};

export const upvotePost = async (slug: string): Promise<Post> => {
  const response = await axios.patch(`http://localhost:3000/posts/${slug}/upvote`, null, { withCredentials: true });

  return response.data;
};

export const downvotePost = async (slug: string): Promise<Post> => {
  const response = await axios.patch(`http://localhost:3000/posts/${slug}/downvote`, null, { withCredentials: true });

  return response.data;
};
