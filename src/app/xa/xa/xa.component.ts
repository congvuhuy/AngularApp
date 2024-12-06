import {Component, OnInit} from '@angular/core';
import {ApiXaService} from "../../service/api-xa.service";
import {ApiHuyenService} from "../../service/api-huyen.service";
import {ApiTinhService} from "../../service/api-tinh.service";

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

  tinhList: any[]=[];
  huyenList:any[]=[];
  totalItem:number=0;
  selectedMaTinh: string='';
  selectedMaHuyen: string='';
  filter: string='';
  lastPage:number=0;
  constructor(private apiXa:ApiXaService ,private apiHuyen:ApiHuyenService, private apiTinh:ApiTinhService) {
  }
  ngOnInit(): void {
    this.loadList();
    this.loadListTinh()
    const inputElement= document.getElementById('filter');
    if (inputElement){
      inputElement.onkeydown = (event: KeyboardEvent) => {
        if(event.key==='Enter')
        {
          this.loadList()
        }
      }
    }
  }
  reload(){
    this.apiXa.getList('', '',0, 10,'').subscribe(
      res=>{
        this.xaList=res.items;
        this.totalItem=res.totalCount;
        this.lastPage=Math.floor(this.totalItem/this.maxResultCount)
      }
    )
  }
  loadList(){
    this.apiXa.getList(this.selectedMaTinh, this.selectedMaHuyen,this.skipCount, this.maxResultCount,this.filter).subscribe(
      res=>{

        this.xaList=res.items;
        this.totalItem=res.totalCount;
        this.lastPage=Math.floor(this.totalItem/this.maxResultCount)
      }
    )
  }

  // search and filter
  loadListTinh(){
    this.apiTinh.getList('',this.skipCount,this.maxResultCount).subscribe(
      res=>{
        this.tinhList=res.items;
      }
    )
  }
  onTinhChange(event: Event) {
    var selectedMaTinh = (event.target as HTMLSelectElement).value;
    this.selectedMaTinh=selectedMaTinh;
    this.loadList();
    this.currentPage=1
    this.apiHuyen.getList(this.selectedMaTinh,'',this.skipCount,this.maxResultCount).subscribe(
      res=>{
        this.huyenList = res.items;
      }
    )
  }
  onHuyenChange(event: Event) {
    this.selectedMaHuyen = (event.target as HTMLSelectElement).value;
    this.loadList()
  }

  //control form
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
  // xa index
  delete(id:number) {
    this.apiXa.delete(id).subscribe(
      res=>{
        this.loadList();
      }
    )
  }
  prevPage() {
      this.skipCount -= this.maxResultCount;
      this.loadList();
      this.currentPage-=1

  }
  nextPage() {
    this.skipCount+=this.maxResultCount
    this.loadList()
    this.currentPage+=1
  }
}
