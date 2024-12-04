import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiTinhService} from "../../service/api-tinh.service";
import {ApiHuyenService} from "../../service/api-huyen.service";
import {ApiXaService} from "../../service/api-xa.service";

@Component({
  selector: 'app-xa-form',
  templateUrl: './xa-form.component.html',
  styleUrl: './xa-form.component.scss'
})
export class XaFormComponent implements OnInit{
  @Input() xaData:any;
  @Input() showForm:any;
  @Output() closeForm=new EventEmitter<void>();
  listFormTinh:any=[];
  listFormHuyen:any=[];
  createOrUpdateForm: FormGroup;
   maXa:number=0 ;

  constructor(private fb:FormBuilder, private apiTinh:ApiTinhService, private apiHuyen:ApiHuyenService, private apiXa:ApiXaService) {
    this.createOrUpdateForm=this.fb.group({
      maTinh: ['', Validators.required],
      maHuyen: ['', Validators.required],
      maXa: ['', Validators.required],
      tenXa:['', Validators.required],
      cap: ['', Validators.required],
      isXaNgheo:[true],
      isXaMienNui:[true],
      isXaDanToc:[true],
      isThanhThi:[true],
      isActive:[true],
    })

  }
  getListTinh(){
    this.apiTinh.getFullList().subscribe(
      res=>{
        this.listFormTinh = res.items;
      })
  }
  getListHuyenByMaTinh(currentMaTinh: string) {
      this.apiHuyen.getListByMaTinh(currentMaTinh).subscribe(
        res=>{
          this.listFormHuyen = res;
          console.log(this.listFormHuyen)
        }
      )
  }
  ngOnInit(): void {
    if (this.xaData) {
      this.createOrUpdateForm.patchValue(this.xaData);
      this.getListTinh()
    }

    this.createOrUpdateForm.get('maTinh')?.valueChanges.subscribe(maTinh => {
      if (maTinh) {
        console.log('hello')
        console.log(maTinh)
        this.getListHuyenByMaTinh(maTinh);
      }
    });

    // let currentMaTinh:'' = this.createOrUpdateForm.get('maTinh')?.value;
    // if (currentMaTinh) {
    //   this.getListHuyenByMaTinh(currentMaTinh);
    // }
  }



  update(){
  }


}
