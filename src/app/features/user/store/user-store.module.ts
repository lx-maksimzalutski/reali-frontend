import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user.reducers';

@NgModule({
  imports: [StoreModule.forFeature('users', userReducer)],
})
export class UserStoreModule {}
