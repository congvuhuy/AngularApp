import {Component, OnInit} from '@angular/core';
import {ApiTinhHuyenXaService} from "../../service/api-tinh-huyen-xa.service";

@Component({
  selector: 'app-tinh',
  templateUrl: './tinh.component.html',
  styleUrl: './tinh.component.scss'
})
export class TinhComponent implements OnInit{
  constructor(private api: ApiTinhHuyenXaService) {
  }

  ngOnInit(): void {
    this.api.getListTinh().subscribe(
      res=>{
        console.log(res)
      }
    )
  }


}
