import { Component } from '@angular/core';
import {LoginService} from "../../app/service/login.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor( private loginService: LoginService) {
  }
  logout(){
    this.loginService.Logout();
    console.log(this.loginService.status)
  }
}
