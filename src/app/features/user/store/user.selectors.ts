import { createSelector } from '@ngrx/store';
import { UsersState } from './users.state';
import { RootState } from '../../../store/root-store.module';

export const selectUsersState = (state: RootState) => state.users;

export const selectUsers = createSelector(selectUsersState, (state: UsersState) => state.users);
export const selectUserById = createSelector(selectUsersState, (state: UsersState, userId: number) =>
  state.users.find((user) => user.id === userId),
);
