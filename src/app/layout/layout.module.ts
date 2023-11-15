import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './component/layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent
  ],
  imports: [
    LayoutRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LayoutModule { }
