import {Component, OnInit} from '@angular/core';
import {ApiXaService} from "../../service/api-xa.service";

@Component({
  selector: 'app-xa',
  templateUrl: './xa.component.html',
  styleUrl: './xa.component.scss'
})
export class XaComponent implements OnInit{
  currentPage=1;
  skipCount =0;
  maxResultCount=10;
  xaList :any[]=[];
  selectedXa:any;
  showform: boolean=false;
  filter: string='';

  constructor(private apiXa:ApiXaService) {
  }
  ngOnInit(): void {
    this.loadList()
  }
  loadFilter() {
    this.apiXa.getListByFilter(this.filter,this.skipCount,this.maxResultCount).subscribe(
      res=>{
        this.xaList=res.items
      }
    )
  }
  loadList(){
    this.apiXa.getList(this.skipCount,this.maxResultCount).subscribe(
      res=>{
        this.xaList=res.items;
      }
    )
  }

  prevPage() {
    if(this.skipCount>0){
      this.skipCount-=this.maxResultCount
      this.loadList()
      this.currentPage-=1
    }
  }

  nextPage() {
    this.skipCount+=this.maxResultCount
    this.loadList()
    this.currentPage+=1

  }

  delete(id:number) {
    this.apiXa.delete(id).subscribe(
      res=>{
        console.log('xoa thanh cong');
        this.loadList();
      }
    )
  }

  edit(itemXa: any) {
    this.selectedXa=itemXa;
    this.showform=true
  }

  closeForm() {
    this.loadList();
    this.showform=false;
  }

  create() {
    this.showform=true
    this.selectedXa=null
  }
}
