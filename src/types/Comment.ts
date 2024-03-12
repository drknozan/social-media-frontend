import { User } from './User';

export type Comment = {
  id: string;
  user: User;
  content: string;
  createdAt: Date;
};
