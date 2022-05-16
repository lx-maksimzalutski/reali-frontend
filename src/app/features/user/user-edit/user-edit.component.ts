import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../../store/root-store.module';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserInput } from '../user.interfaces';
import { map, switchMap } from 'rxjs';
import { selectUserById } from '../store/user.selectors';
import { ActionTypes } from '../store/user.actions';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  public selectedUserInfo!: User | null;

  constructor(private route: ActivatedRoute, private store: Store<RootState>, private router: Router) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => {
          return Number(params['id']);
        }),
        switchMap((userId) => {
          return this.store.select(selectUserById, userId);
        }),
      )
      .subscribe((user: User | undefined) => {
        debugger;
        this.selectedUserInfo = user || null;
      });
  }

  public updateUser(userChangedData: UserInput): void {
    if (!this.selectedUserInfo) {
      return;
    }

    this.store.dispatch({
      type: ActionTypes.UPDATE_USER,
      userId: this.selectedUserInfo.id,
      payload: userChangedData,
    });

    this.router.navigate(['/users']);
  }
}
