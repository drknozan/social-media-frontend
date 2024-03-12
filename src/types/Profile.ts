import { Membership } from './Membership';
import { Post } from './Post';
import { Follow } from './Follow';
import { Activity } from './Activity';

export type Profile = {
  username: string;
  email: string;
  profileVisibility: boolean;
  bio: string;
  posts: Post[];
  followed: Follow[];
  followers: Follow[];
  memberships: Membership[];
  activities: Activity[];
};
