import { Component } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string='';
  password: string='';

  constructor(private loginService: LoginService, private router: Router) {
  }
  login(username: string, password: string) {
      let result=this.loginService.Login(username, password);
    console.log(result);
      if(result){
        alert("Đăng nhập thành công");
        this.router.navigate(['/dashboard']);
      }else {
        alert('Invalid username or password');
      }
  }
}
