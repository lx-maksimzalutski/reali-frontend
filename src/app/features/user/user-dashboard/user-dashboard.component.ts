import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../../store/root-store.module';
import { User } from '../user.interfaces';
import { ActionTypes } from '../store/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent {
  public users: User[] = [];

  constructor(private store: Store<RootState>, private router: Router) {
    this.store
      .select((state) => state.users.users)
      .subscribe((users) => {
        this.users = users;
      });
  }

  public deleteUser(userId: number) {
    this.store.dispatch({
      type: ActionTypes.DELETE_USER,
      id: userId,
    });
  }

  public editUser(userId: number) {
    this.router.navigate(['/users/edit', userId]);
  }
}
