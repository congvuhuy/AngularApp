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
  filter: string='';
  tinhList: any[]=[];
  huyenList:any[]=[];
  selectedMaTinh: string='';

  constructor(private apiXa:ApiXaService ,private apiHuyen:ApiHuyenService, private apiTinh:ApiTinhService) {
  }
  ngOnInit(): void {
    this.loadList()
    this.loadListTinh()
    const inputElement= document.getElementById('filter');
    if (inputElement){
      inputElement.onkeydown = (event: KeyboardEvent) => {
        if(event.key==='Enter')
        {
          this.loadFilter()
        }
      }
    }
  }
  loadList(){
    this.apiXa.getList(this.skipCount,this.maxResultCount).subscribe(
      res=>{
        this.xaList=res.items;
      }
    )
  }
  loadListXaByMaTinh(maTinh:string){
    this.apiXa.getListByMaTinh(maTinh).subscribe(
      res=>{
        if(res.Successfull){

        }
        this.xaList=res.items;
      }
    )
  }
  // search and filter
  loadListTinh(){
    this.apiTinh.getFullList().subscribe(
      res=>{
        this.tinhList=res.items;
      }
    )
  }
  onTinhChange(event: Event) {
    var selectedMaTinh = (event.target as HTMLSelectElement).value;
    this.selectedMaTinh=selectedMaTinh;
    this.loadListXaByMaTinh(selectedMaTinh);
    this.apiHuyen.getListByMaTinh(selectedMaTinh).subscribe(
      res=>{
        this.huyenList = res.items;
      }
    )
  }
  onHuyenChange(event: Event) {
    const selectedMaHuyen = (event.target as HTMLSelectElement).value;
    this.apiXa.getListByMaHuyenMaTinh(this.selectedMaTinh, selectedMaHuyen).subscribe(
      res=>{
        this.xaList=res.items;
      }
    )
  }
  loadFilter() {
    this.apiXa.getListByFilter(this.filter,this.skipCount,this.maxResultCount).subscribe(
      res=>{
        this.xaList=res.items
      }
    )
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
        console.log('xoa thanh cong');
        this.loadList();
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



}
