import { Component } from '@angular/core';

import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string='';
  password: string='';
  user_access_token: string=''
  constructor(private apiService: ApiService, private router: Router) {
  }
  login(username: string, password: string) {
    this.apiService.login(username, password).subscribe(
      res=>{
        if(res.access_token != null){
          this.user_access_token=res.access_token
          this.router.navigate(['/dashboard'])
          localStorage.setItem('access_token',this.user_access_token)
          localStorage.setItem('userSession',this.username)
        }
      },
      error => {
        alert("loi dang nhap")
      }
    )
  }

}

