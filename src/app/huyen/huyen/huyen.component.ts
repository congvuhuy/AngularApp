import {Component, OnInit} from '@angular/core';
import {ApiHuyenService} from "../../service/api-huyen.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiTinhService} from "../../service/api-tinh.service";

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
  filter: string='';
  tinhList: any[]=[];
  constructor(private fb: FormBuilder,private apiHuyen:ApiHuyenService, private apiTinh:ApiTinhService) {
  }
  ngOnInit(): void {
    this.loadListTinh()
    this.loadList()
    const inputElement= document.getElementById('filter');
    if (inputElement){
      inputElement.onkeydown = (event: KeyboardEvent) => {
        if(event.key==='Enter')
          this.loadFilter()
      }
    }
  }

  loadList(){
    this.apiHuyen.getList(this.skipCount,this.maxResultCount).subscribe(
      res=>{
        this.huyenList=res.items;
      })
  }
  //form search
  loadListTinh(){
    this.apiTinh.getFullList().subscribe(
      res=>{
        this.tinhList=res.items;
      }
    )
  }
  onTinhChange(event: Event) {
    const selectedMaTinh = (event.target as HTMLSelectElement).value;
    this.apiHuyen.getListByMaTinh(selectedMaTinh).subscribe(
      res=>{
        this.huyenList = res.items;
      }
    )
  }
  loadFilter() {
    this.apiHuyen.getListByFilter(this.skipCount,this.maxResultCount,this.filter).subscribe(
      res=>{
        this.huyenList=res.items
      }
    )
  }

  //control form edit or create

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
  //form index
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
