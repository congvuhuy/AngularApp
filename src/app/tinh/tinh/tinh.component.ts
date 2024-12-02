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
  tinhForm: FormGroup;
  tinhList: any[] = [];
  selectedTinh: any;
  skipCount = 0;
  maxResultCount = 10
  constructor(private fb: FormBuilder, private apiTinhService: ApiTinhService) {
    this.tinhForm = this.fb.group({
      maTinh: ['', Validators.required],
      tenTinh: ['', Validators.required],
      cap: ['', Validators.required],
      isActive: [true], id: [0]
    });
  }
  ngOnInit(): void {
    this.loadList()
  }
  closeForm(){
      this.showform=false;
    this.loadList()
  }
  loadList(): void {
    this.apiTinhService.getList(this.skipCount, this.maxResultCount).subscribe(
      res => {
        this.tinhList = res.items;
      });
  }
  nextPage(): void {
    this.skipCount += this.maxResultCount;
    this.currentPage=this.skipCount/10
    this.loadList();
  }
  prevPage(): void {
    if (this.skipCount > 0) {
      this.skipCount -= this.maxResultCount;
      this.currentPage=this.skipCount/10
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
