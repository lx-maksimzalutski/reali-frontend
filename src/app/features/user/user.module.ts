import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserRoutingModule } from './user-routing.module';
import { UserFormModule } from '../../common/components/user-form/user-form.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [UserComponent, UserCreateComponent, UserDashboardComponent, UserEditComponent],
  imports: [CommonModule, UserRoutingModule, UserFormModule, MatIconModule],
})
export class UserModule {}
