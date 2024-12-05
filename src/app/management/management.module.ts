import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {XaModule} from "../xa/xa.module";
import {TinhModule} from "../tinh/tinh.module";
import {HuyenModule} from "../huyen/huyen.module";
import {ManagementRoutingModule} from "./management-routing.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    TinhModule,
    HuyenModule,
    XaModule
  ]
})
export class ManagementModule { }
