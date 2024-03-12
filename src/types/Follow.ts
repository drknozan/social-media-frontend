import { User } from './User';

export type Follow = {
  followed?: User;
  follower?: User;
  createdAt?: Date;
};
