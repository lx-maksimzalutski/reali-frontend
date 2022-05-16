import { Component } from '@angular/core';
import { UserInput } from '../user.interfaces';
import { Store } from '@ngrx/store';
import { RootState } from '../../../store/root-store.module';
import { CreateUserAction } from '../store/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent {
  constructor(private store: Store<RootState>, private router: Router) {}

  public createUser(userInfo: UserInput) {
    this.store.dispatch(new CreateUserAction(userInfo));
    this.router.navigate(['/users']);
  }
}
