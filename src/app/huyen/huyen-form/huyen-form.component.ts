import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiTinhService} from "../../service/api-tinh.service";
import {AuthService} from "../../service/auth.service";
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

  constructor(private fb:FormBuilder,private apiTinhService: ApiTinhService, private apiHuyenList: ApiHuyenService) {

    this.createOrEditForm=this.fb.group({
      maHuyen:['',Validators.required],
      tenHuyen:['',Validators.required],
      maTinh:['',Validators.required],
      cap:['',Validators.required],
      isActive:true,
      id:[0]
    });
  }

  ngOnInit(): void {
    this.apiTinhService.getList('',0,1000).subscribe(
      res=>{
        this.listSelectTinh=res.items
      },
      err=>{
        console.log('loi',err)
      }
    )
    if (this.huyenData){
      this.createOrEditForm.patchValue(this.huyenData)
    }

  }
  createOrUpdate() {

    const{maTinh,maHuyen,tenHuyen,cap,isActive,id}=this.createOrEditForm.value;
    const submitHuyen={
      'maTinh':maTinh,
      'maHuyen':maHuyen,
      'tenHuyen':tenHuyen,
      'cap':cap,
      'isActive':isActive,
      'id':id
    }

    this.apiHuyenList.createOrUpdateHuyen(submitHuyen).subscribe(
      res=>{
        if(res.isSuccessful){
          alert("thành công");
          this.closeForm.emit();
        }else {
          alert(res.errorMessage)
        }
       },
       err=> {
        alert("không thành công")
        }
      )
  }


}
