import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HuyenComponent } from './huyen/huyen.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HuyenFormComponent } from './huyen-form/huyen-form.component';
import {ApiHuyenService} from "../service/api-huyen.service";
import {HuyenRoutingModule} from "./huyen-routing.module";



@NgModule({
  declarations: [
    HuyenComponent,
    HuyenFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HuyenRoutingModule
  ],
  providers:[
    ApiHuyenService,
  ]
})
export class HuyenModule { }
