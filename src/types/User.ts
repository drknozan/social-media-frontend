import { Post } from './Post';

export type User = {
  username: string;
  profileVisibility?: boolean;
  bio?: string;
  posts?: Post[];
  _count?: {
    followed: number;
    followers: number;
  };
};
