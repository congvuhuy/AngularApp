import {Component, OnInit} from '@angular/core';
import {ApiHuyenService} from "../../service/api-huyen.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-huyen',
  templateUrl: './huyen.component.html',
  styleUrl: './huyen.component.scss'
})
export class HuyenComponent  implements OnInit{
  currentPage=1;
  skipCount = 0;
  maxResultCount = 10;
  huyenList:any[]=[];
  selectedHuyen:any;
  showform:boolean= false;
  constructor(private fb: FormBuilder,private apiHuyen:ApiHuyenService) {

  }
  ngOnInit(): void {
    this.loadList()
  }
  loadList(){
    this.apiHuyen.getList(this.skipCount,this.maxResultCount).subscribe(
      res=>{
      this.huyenList=res.items;
    })
  }

  create() {
    this.showform=true;
    this.selectedHuyen=null
  }

  delete(id:number) {
      this.apiHuyen.delete(id).subscribe(
        res=>{
         this.loadList()
        }
      )
  }
  edit(itemHuyen: any) {
    this.showform=true;
    this.selectedHuyen=itemHuyen;
  }
  closeForm() {
    this.showform=false;
    this.loadList()
  }
  prevPage() {
    if (this.skipCount>0){
      this.skipCount=this.skipCount-this.maxResultCount
    }
    this.currentPage-=1;
    this.loadList()

  }

  nextPage() {
    this.skipCount=this.skipCount+this.maxResultCount;
    this.currentPage+=1;
    this.loadList()
  }


}
