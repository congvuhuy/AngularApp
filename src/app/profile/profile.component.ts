import {Component, OnInit} from '@angular/core';
import {LoginService} from "../service/login.service";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})


export class ProfileComponent implements OnInit{
  fullName: string = '';
  dateOfBirth: string = '';
  goiTinh: boolean = false;
  address: string = '';
  email: string = '';
  phone: string = '';
  constructor(private apiService: ApiService) {
  }
  ngOnInit(): void {
    this.apiService.getAccountBootstrap().subscribe(
      res=>{
        console.log(res.userSession)
        this.fullName = res.userSession.fullName;
        this.dateOfBirth = res.userSession.ngaySinh;
        this.goiTinh = res.userSession.goiTinh;
        this.address = res.userSession.address;
        this.email = res.userSession.email;
        this.phone = res.userSession.phoneNumber;
      }
    )
  }
  submitProfile(): void {
    console.log('Profile data:',
      {
        fullName: this.fullName,
        dateOfBirth: this.dateOfBirth,
        goiTinh: this.goiTinh,
        address: this.address,
        email: this.email,
        phone: this.phone
      });
  }

  // data:any ;
  // ngOnInit(): void {
  //   this.loginService.getData().subscribe( (response) => {
  //     this.data = response;
  //     console.log(this.data);
  //     },
  //     (error) => {
  //     console.error('There was an error!', error);
  //   }
  //   );
  // }
}
