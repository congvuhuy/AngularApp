import { Component } from '@angular/core';
import {MenuName,MenuService} from "../../app/service/menu.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuName: MenuName = 'dashboard';
  constructor(private menuService: MenuService,
  ) {
  }
  onClickMenu(menuName: MenuName ) {
    this.menuService.$menuName.next(menuName);
    this.menuName= menuName;
  }

}
