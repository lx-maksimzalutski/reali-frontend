import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../../store/root-store.module';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserInput } from '../user.interfaces';
import { map, Subject, switchMap, takeUntil } from 'rxjs';
import { selectUserById } from '../store/user.selectors';
import { UpdateUserAction } from '../store/user.actions';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit, OnDestroy {
  public selectedUserInfo!: User | null;

  private onDestroy$ = new Subject();

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
        takeUntil(this.onDestroy$),
      )
      .subscribe((user: User | undefined) => {
        this.selectedUserInfo = user || null;
      });
  }

  public updateUser(userChangedData: UserInput): void {
    if (!this.selectedUserInfo) {
      return;
    }

    this.store.dispatch(new UpdateUserAction(this.selectedUserInfo.id, userChangedData));
    this.router.navigate(['/users']);
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
