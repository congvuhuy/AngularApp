import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

import {ApiTinhService} from "../service/api-tinh.service";
import {ApiHuyenService} from "../service/api-huyen.service";
import {ApiXaService} from "../service/api-xa.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId:string =''
  name: string='';
  fullName: string='';
  ngaySinh: string='';
  gioiTinh: string='';
  diaChi: string='';
  maTinh: string='';
  maHuyen: string='';
  maXa: string='';
  phoneNumber: string='';
  email: string='';

  data:{}={};
  listtinh: any[] = [];
  listhuyen: any[] = [];
  listxa: any[] = [];

  showImage:boolean=false;
  selectedFile: File | null = null;
  constructor(private authService: AuthService, private apiTinhService:ApiTinhService , private ApiHuyenService:ApiHuyenService, private apiXaService:ApiXaService) { }

  ngOnInit(): void {
    this.authService.getAccountBootstrap().subscribe(
      res=>{
        this.userId=res.id;
        this.name=res.userSession.name;
        this.fullName=res.userSession.fullName;
        this.ngaySinh= this.convertToDate(res.userSession.ngaySinh);
        this.gioiTinh=res.userSession.gioiTinh.toString();
        this.diaChi=res.userSession.diaChi;
        this.maTinh=res.userSession.maTinh;
        this.maHuyen=res.userSession.maHuyen;
        this.maXa=res.userSession.maXa;
        this.phoneNumber=res.userSession.phoneNumber;
        this.email= res.userSession.email;
      }

    )
    this.authService.getImg().subscribe(
      res=>{
      }
    )
    this.apiTinhService.getFullList().subscribe(
      res => {
        this.listtinh = res.items;
      },
      err => {
        console.error('', err);
      }
    );
  }
  convertToDate(isoString: string): string {
    return new Date(isoString).toISOString().split('T')[0];
  }
  onTinhChange(): void {
    if (this.maTinh) {
      this.ApiHuyenService.getListByMaTinh(this.maTinh).subscribe(
        res => {
          this.listhuyen = res.items;
          this.listxa = [];
        },
        err => {
          console.error('', err);
        }
      );
    }
  }
  onHuyenChange():void{

    console.log('maHuyen,maTinh',this.maHuyen,this.maTinh)
    if(this.maHuyen && this.maTinh){
      this.apiXaService.getListByMaHuyen(this.maTinh,this.maHuyen).subscribe(
        res=>{
          if (res.success){
            console.log("danh sach xa:",res)
          }

        },err => {
          console.log('err',err.errorMessage)
        }
      )
    }
  }
  // onHuyenChange(): void {
  //   if (this.maHuyen) {
  //     this.apiService.getXa(this.maHuyen).subscribe(
  //       res => {
  //         this.listxa = res;
  //       },
  //       err => {
  //         console.error('', err);
  //       }
  //     );
  //   }
  // }

  submitProfile() {
    this.data={
      userId: this.userId,
      name: this.name,
      avatarDocumentId: null,
      fullName:this.fullName,
      ngaySinh:new Date(this.ngaySinh),
      gioiTinh:Number(this.gioiTinh),
      diaChi:this.diaChi,
      phoneNumber:this.phoneNumber,
      email:this.email,
      maTinh: this.maTinh,
      maHuyen: this.maHuyen,
      maXa: this.maXa,
    }

      this.authService.updateAccountInfo(this.data).subscribe(
        res=>{
          alert('thành công')
        },
        err=>{
          alert('thất bại')
        }
      )


  }

  show() {
    this.showImage=!this.showImage
  }

  onFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;
    console.log(input.files)
    if (input.files ) {
      this.selectedFile = input.files[0];
    }
  }
  uploadFile(): void {
    if (this.selectedFile) {
      this.authService.uploadImg(this.selectedFile).subscribe(
        res => {
          alert(`Thành công`);
          },
          err => {
          alert('Lỗi');
        }
        );
    }
    else {
      alert('Chưa có ảnh');
    }
  }

}
