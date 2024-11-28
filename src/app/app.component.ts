import { Component } from '@angular/core';
import {MenuName,MenuService} from "./service/menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myApp';
  menuName : MenuName="dashboard";
  constructor(private menuService: MenuService) {
    this.menuService.$menuName.subscribe(res=>{
      this.menuName = res;
    })
  }

}
