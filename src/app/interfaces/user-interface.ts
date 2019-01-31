import {PostUserAccount} from '../generated/userservice';

export class UserServiceValues implements PostUserAccount {
  userName: string;
  password: string;
  userAddress: string;
  email: string;
}
