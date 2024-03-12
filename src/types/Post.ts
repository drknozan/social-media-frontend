import { Comment } from './Comment';
import { Community } from './Community';
import { User } from './User';

export type Post = {
  slug: string;
  title?: string;
  content?: string;
  upvotes?: number;
  downvotes?: number;
  createdAt?: Date;
  user?: User;
  community?: Community;
  comments?: Comment[];
};
