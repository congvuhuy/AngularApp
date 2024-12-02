import { Component } from '@angular/core';
import {ApiService} from "../../app/service/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private apiService : ApiService, private router: Router) {
  }
  logout(){
    this.apiService.logout().subscribe(
      res=>{
       localStorage.clear()
        console.log('da dang xuat')
        this.router.navigate(['/login'])
      }
    )
  }
}
