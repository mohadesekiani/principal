import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './component/layout/layout.component';
import { MenuComponent } from './component/menu/menu.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { UserGroupsModule } from '../user-groups/user-groups.module';
import { UsersModule } from '../users/users.module';

@NgModule({
  declarations: [LayoutComponent, MenuComponent],
  imports: [
    LayoutRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    UserGroupsModule,
    UsersModule
  ],
})
export class LayoutModule { }
