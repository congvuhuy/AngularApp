import { Injectable } from '@angular/core';
import {Account} from "../model/Model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  listAccounts: Account[]=[{
    accountId: 1,
    fullName:"Tran Van A",
    phone:123,
    userName:'Admin',
    password:'123@',
    roleId:1
  },
    {
    accountId: 2,
      fullName:"Tran Van B",
      phone:123,
    userName:'User',
    password:'123@',
    roleId:2
  }]

  status:boolean = false;
  Login(username: string, password:string) :boolean{
    let result=this.listAccounts.find(u=>u.userName===username && u.password===password)
    if(result){
      this.status=true;
      return true;
    }return false;
  }
  Logout():void{
    this.status=false;
  }
  isAuthenticated():boolean{
    return this.status;
  }
  constructor() { }

}