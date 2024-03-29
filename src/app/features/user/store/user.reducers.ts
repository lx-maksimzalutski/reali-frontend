import { initialState, UsersState } from './users.state';
import { User } from '../user.interfaces';
import { ActionTypes, UserActions } from './user.actions';

export function userReducer(state: UsersState = initialState, action: UserActions): UsersState {
  switch (action.type) {
    case ActionTypes.CREATE_USER: {
      const newUser = {
        id: new Date().getTime(),
        ...action.payload,
      };
      return {
        ...state,
        users: [...state.users, newUser],
      };
    }
    case ActionTypes.UPDATE_USER:
      const newUserList = state.users.map((user: User) => {
        if (user.id === action.userId) {
          return { ...user, ...action.payload };
        }
        return user;
      });
      return {
        ...state,
        users: newUserList,
      };

    case ActionTypes.DELETE_USER:
      const users = state.users.filter((user: User) => {
        return user.id !== action.id;
      });
      return {
        ...state,
        users: users,
      };
    default:
      return state;
  }
}
