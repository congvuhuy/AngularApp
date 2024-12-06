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
  showform: boolean= false;
  tinhList: any[]=[];

  filter: string='';
  selectedMaTinh:string='';
  totalItem: number=0;
  lastPage:number=0
  constructor(private fb: FormBuilder,private apiHuyen:ApiHuyenService, private apiTinh:ApiTinhService) {
  }
  ngOnInit(): void {
    this.loadList()
    this.loadListTinh()
    const inputElement= document.getElementById('filter');
    if (inputElement){
      inputElement.onkeydown = (event: KeyboardEvent) => {
        if(event.key==='Enter')
          this.loadList()
      }
    }
  }

  loadList(){

    this.apiHuyen.getList(this.selectedMaTinh,this.filter,this.skipCount,this.maxResultCount).subscribe(
      res=>{
          this.huyenList=res.items;
        this.totalItem=res.totalCount;
        this.lastPage=Math.floor(this.totalItem/this.maxResultCount)
      })
  }
  //form search
  loadListTinh(){
    this.apiTinh.getList('',0,1000).subscribe(
      res=>{
        this.tinhList=res.items;
      }
    )
  }
  onTinhChange(event: Event) {
    this.selectedMaTinh = (event.target as HTMLSelectElement).value;
    this.currentPage=1;
    this.loadList()
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
    this.skipCount -= this.maxResultCount;
    this.loadList();
    this.currentPage-=1

  }

  nextPage() {
    this.skipCount=this.skipCount+this.maxResultCount;
    this.currentPage+=1;
    this.loadList()
  }


}
