import { Post } from './Post';

export type Community = {
  name: string;
  description?: string;
  createdAt?: Date;
  posts?: Post[];
  _count?: { memberships: number };
};
