import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { UserStoreModule } from '../features/user/store/user-store.module';
import { UsersState } from '../features/user/store/users.state';

export interface RootState {
  users: UsersState;
}

@NgModule({
  imports: [UserStoreModule, StoreModule.forRoot({})],
})
export class AppStoreModule {}
