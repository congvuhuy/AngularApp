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
  listFormTinh:any[]=[];
  listFormHuyen:any[]=[];
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
        this.listFormTinh=Object.values(this.listFormTinh)
      })
  }
  getListHuyenByMaTinh(currentMaTinh: string) {
      this.apiHuyen.getListByMaTinh(currentMaTinh).subscribe(
        res=>{
          this.listFormHuyen=res.items
        }
      )
  }
  ngOnInit(): void {

      if(this.xaData===null){
        this.getListTinh()
        this.listFormHuyen=[];
      }else{
        this.createOrUpdateForm.patchValue(this.xaData);
        this.getListTinh();
        this.getListHuyenByMaTinh(this.xaData.maTinh)
      }

  }
  onTinhChange(event: Event) {
    const selectedMaTinh = (event.target as HTMLSelectElement).value;
    this.apiHuyen.getListByMaTinh(selectedMaTinh).subscribe(
      res=>{
        this.listFormHuyen = res.items;
      }
    )
  }
  update(){
    let xaOtd={
      'maTinh': '',
      'maHuyen': '',
      'maXa': '',
      'tenXa':'',
      'cap': '',
      'isXaNgheo':null,
      'isXaMienNui':null,
      'isXaDanToc':null,
      'isThanhThi':null,
      'isActive':null
    }
    if(this.createOrUpdateForm.valid){
      xaOtd=this.createOrUpdateForm.value;
     this.apiXa.createOrUpdate(xaOtd).subscribe(
       res=>{
         if(res.isSuccessful){
           alert("Thành công")
           this.closeForm.emit();
         }else {
           console.log(res.errorMessage)
         }
       }
     )
    }

  }

}
