import { Component } from '@angular/core';
import { UserCreateInput } from '../user.interfaces';
import { Store } from '@ngrx/store';
import { RootState } from '../../../store/root-store.module';
import { ActionTypes } from '../store/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent {
  constructor(private store: Store<RootState>, private router: Router) {}

  public createUser(userInfo: UserCreateInput) {
    const newUser = {
      ...userInfo,
      id: new Date().getTime(),
    };

    this.store.dispatch({
      type: ActionTypes.CREATE_USER,
      payload: newUser,
    });

    this.router.navigate(['/users']);
  }
}
