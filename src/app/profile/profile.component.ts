import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { formatDate } from '@angular/common';
import {flatMap} from "rxjs";

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
  token: string | null = '';

  showImage:boolean=false;
  selectedFile: File | null = null;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token');
    this.apiService.getAccountBootstrap().subscribe(
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
    this.apiService.getImg().subscribe(
      res=>{
        console.log(res)
      }
    )
    this.apiService.getTinh().subscribe(
      res => {
        this.listtinh = res;
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
      this.apiService.getHuyen(this.maTinh).subscribe(
        res => {
          this.listhuyen = res;
          this.listxa = [];
        },
        err => {
          console.error('', err);
        }
      );
    }
  }

  onHuyenChange(): void {
    if (this.maHuyen) {
      this.apiService.getXa(this.maHuyen).subscribe(
        res => {
          this.listxa = res;
        },
        err => {
          console.error('', err);
        }
      );
    }
  }

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

    if (this.token !=null && this.token != '') {
      console.log(this.data)
      this.apiService.updateAccountInfo(this.data,this.token).subscribe(
        res=>{
          alert('thành công')
        },
        err=>{
          alert('thất bại')
        }
      )
    }else(
      console.log('khong co token')
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
      this.apiService.uploadImg(this.selectedFile).subscribe(
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
