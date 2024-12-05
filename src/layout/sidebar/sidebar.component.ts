import { Component } from '@angular/core';
import {AuthService} from "../../app/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private authService : AuthService, private router: Router) {
  }
  logout(){
    this.authService.logout().subscribe(
      res=>{
       localStorage.clear()
        console.log('da dang xuat')
        this.router.navigate(['/login'])
      }
    )
  }
}
