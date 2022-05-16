import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserRoutingModule } from './user-routing.module';
import { UserFormModule } from '../../common/user-form/user-form.module';

@NgModule({
  declarations: [UserComponent, UserCreateComponent, UserDashboardComponent, UserEditComponent],
  imports: [CommonModule, UserRoutingModule, UserFormModule],
})
export class UserModule {}
