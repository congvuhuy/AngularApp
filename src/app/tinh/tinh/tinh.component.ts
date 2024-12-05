import {Component, OnInit} from '@angular/core';
import {ApiTinhService} from "../../service/api-tinh.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tinh',
  templateUrl: './tinh.component.html',
  styleUrl: './tinh.component.scss'
})
export class TinhComponent implements OnInit {
  showform =false;
  currentPage=0;
  tinhList: any[] = [];
  selectedTinh: any;
  skipCount = 0;
  maxResultCount = 10
  filter: string='';
  totalItem: number=0;
  constructor(private fb: FormBuilder, private apiTinhService: ApiTinhService) {

  }
  ngOnInit(): void {
    this.loadList();
    const inputElement= document.getElementById('filter');
    if (inputElement){
      inputElement.onkeydown = (event: KeyboardEvent) => {
        if(event.key==='Enter')
        this.loadFilter()
      }
    }

  }

  loadFilter() {
    this.apiTinhService.getListByFilter(this.filter,this.skipCount,this.maxResultCount).subscribe(
      res=>{
       this.tinhList=res.items;
      }
    )
  }
  closeForm(){
      this.showform=false;
    this.loadList()
  }
  loadList(): void {
    this.apiTinhService.getList(this.skipCount, this.maxResultCount).subscribe(
      res => {
        console.log(res)
        this.tinhList = res.items;
        this.totalItem=res.totalCount;
      });
  }
  nextPage(): void {
    if(this.skipCount<this.totalItem-10){
      this.skipCount += this.maxResultCount;
      this.currentPage=this.skipCount/10
      this.loadList();
    }

  }
  prevPage(): void {
    if (this.skipCount > this.skipCount-1) {
      this.skipCount -= this.maxResultCount;
      this.currentPage=this.skipCount/10;
      this.loadList();
    }
  }
  edit(tinh: any) {
    this.showform=true;
    this.selectedTinh = tinh;
  }
  delete(id: number) {
    this.apiTinhService.delete(id).subscribe(
      res => {
        this.loadList()
      });
  }
  create() {
    this.selectedTinh = null;
    this.showform=true;
  }


}
