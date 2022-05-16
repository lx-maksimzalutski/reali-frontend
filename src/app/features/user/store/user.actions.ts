import { Action } from '@ngrx/store';
import { User } from '../user.interfaces';

export enum ActionTypes {
  UPDATE_USER = '[User] Update User',
  CREATE_USER = '[User] Create User',
  DELETE_USER = '[User] Delete User',
}

export class UpdateUserAction implements Action {
  public readonly type = ActionTypes.UPDATE_USER;
  constructor(public payload: User) {}
}

export class CreateUserAction implements Action {
  public readonly type = ActionTypes.CREATE_USER;
  constructor(public payload: User) {}
}

export class DeleteUserAction implements Action {
  public readonly type = ActionTypes.DELETE_USER;
  constructor(public id: number) {}
}

export type UserActions = CreateUserAction | UpdateUserAction | DeleteUserAction;
