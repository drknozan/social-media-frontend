import { Community } from './Community';
import { User } from './User';

export type Membership = {
  community: Community;
  user: User;
  role: 'MEMBER' | 'MODERATOR' | 'FOUNDER';
};
