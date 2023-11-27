import { Component } from '@angular/core';
import { IListMenu } from 'src/app/core/model/interface/list-menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  listMenu: IListMenu[] = [
    {route: '/user',value: 'user',title: 'user',active: true},
    {route: '/user-group',value: 'userGroup',title: 'user Group',active: false},
  ];

  ngOnInit(): void {}
}
