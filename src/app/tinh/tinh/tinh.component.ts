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
  currentPage=1;
  tinhList: any[] = [];
  selectedTinh: any;
  skipCount = 0;
  maxResultCount = 10
  filter: string='';
  totalItem: number=0;
  lastPage: number=0;
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
   this.loadList()
  }
  closeForm(){
      this.showform=false;
    this.loadList()
  }
  loadList(): void {
    this.apiTinhService.getList(this.filter,this.skipCount, this.maxResultCount).subscribe(
      res => {

        this.tinhList = res.items;
        this.totalItem=res.totalCount;
        this.lastPage=Math.floor(this.totalItem/this.maxResultCount)
      });
  }
  nextPage(): void {
    this.skipCount+=this.maxResultCount
    this.loadList()
    this.currentPage+=1

  }
  prevPage(): void {
    this.skipCount -= this.maxResultCount;
    this.loadList();
    this.currentPage-=1
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
