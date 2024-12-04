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
    this.apiTinhService.getFullList().subscribe(
      res=>{
        this.listSelectTinh=res.items
        console.log(this.listSelectTinh)
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

    this.apiHuyenList.createOrUpdateHuyen(maTinh,maHuyen,tenHuyen,cap,isActive,id).subscribe(
      res=>{
        console.log(maTinh,maHuyen,tenHuyen,cap,isActive,id)
         alert("thành công");
         this.closeForm.emit();
       },
       err=> {
        alert("không thành công")
        }
      )
  }


}
