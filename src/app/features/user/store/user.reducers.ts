import { initialState, UsersState } from './users.state';
import { User } from '../user.interfaces';
import { ActionTypes, UserActions } from './user.actions';

export function userReducer(state: UsersState = initialState, action: UserActions): UsersState {
  switch (action.type) {
    case ActionTypes.CREATE_USER: {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    case ActionTypes.UPDATE_USER:
      const newUserList = state.users.map((user: User) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
      return {
        ...state,
        users: newUserList,
      };

    case ActionTypes.DELETE_USER:
      const newUserList2 = state.users.filter((user: User) => {
        return user.id !== action.id;
      });
      return {
        ...state,
        users: newUserList2,
      };
    default:
      return state;
  }
}
