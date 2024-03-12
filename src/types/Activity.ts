import { Post } from './Post';

export type Activity = {
  post: Post;
  activityType: 'UPVOTE' | 'DOWNVOTE' | 'COMMENT';
  createdAt: Date;
};
