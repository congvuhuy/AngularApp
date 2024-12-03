import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiTinhService} from "../../service/api-tinh.service";
import {ApiService} from "../../service/api.service";
import {ApiHuyenService} from "../../service/api-huyen.service";

@Component({
  selector: 'app-huyen-form',
  templateUrl: './huyen-form.component.html',
  styleUrl: './huyen-form.component.scss'
})
export class HuyenFormComponent implements OnInit{
  @Input() huyenData: any;
  @Input() showForm: any;
  @Output() closeForm = new EventEmitter<void>();
  createOrEditForm: FormGroup;
  listSelectTinh :any;

  currentTinhText:string= '';
  constructor(private fb:FormBuilder,private apiTinhService: ApiTinhService, private apiHuyenList: ApiHuyenService) {

    this.createOrEditForm=this.fb.group({
      maHuyen:['',Validators.required],
      tenHuyen:['',Validators.required],
      maTinh:['',Validators.required],
      cap:['',Validators.required],
      isActive:null,
      id:[0]
    });
  }

  ngOnInit(): void {
    if (this.huyenData){
      this.createOrEditForm.patchValue(this.huyenData)
    }
    this.apiTinhService.getFullList().subscribe(
      res=>{
      this.listSelectTinh=res
        console.log(this.listSelectTinh)
      },
      err=>{
        console.log('loi',err)
      }
    )
  }
  createOrUpdate() {
    const{maTinh,maHuyen,tenHuyen,cap,isActive,id}=this.createOrEditForm.value;
    console.log(this.createOrEditForm.value)
    this.apiHuyenList.createOrUpdateHuyen(maTinh,maHuyen,tenHuyen,cap,isActive,id).subscribe(
      res=>{
         alert("thêm thành công");
         this.closeForm.emit();
       },
       err=> {
        alert("không thành công")
        }
      )
  }


}
