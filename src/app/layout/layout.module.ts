import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListUserGroupModule } from '../list-user-group/list-user-group.module';
import { ListUserModule } from '../list-user/list-user.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './component/layout/layout.component';
import { MenuComponent } from './component/menu/menu.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [LayoutComponent, MenuComponent],
  imports: [
    LayoutRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

  ],
})
export class LayoutModule {}
