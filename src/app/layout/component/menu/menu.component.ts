import { Component } from '@angular/core';
import { IListMenu } from 'src/app/core/model/interface/list-menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  listMenu: IListMenu[] = [{
    route: '/', title: 'user', active: true
  }, { route: '/userGroup', title: 'user Group', active: false }]

  ngOnInit(): void { }
}