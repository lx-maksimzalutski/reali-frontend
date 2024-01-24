import { User } from '../user.interfaces';
import { initialUsers } from './user-data';

export interface UsersState {
  users: User[];
}

export const initialState: UsersState = {
  users: initialUsers,
};
