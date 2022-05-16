import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../../store/root-store.module';
import { User } from '../user.interfaces';
import { DeleteUserAction } from '../store/user.actions';
import { Router } from '@angular/router';
import { selectUsers } from '../store/user.selectors';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnDestroy {
  public users: User[] = [];

  private onDestroy$ = new Subject();

  constructor(private store: Store<RootState>, private router: Router) {
    this.store
      .select(selectUsers)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((users) => {
        this.users = users;
      });
  }

  public deleteUser(userId: number) {
    this.store.dispatch(new DeleteUserAction(userId));
  }

  public editUser(userId: number) {
    this.router.navigate(['/users/edit', userId]);
  }

  public ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
