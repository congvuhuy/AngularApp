import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HuyenComponent } from './huyen/huyen.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HuyenFormComponent } from './huyen-form/huyen-form.component';
import {ApiService} from "../service/api.service";
import {ApiHuyenService} from "../service/api-huyen.service";



@NgModule({
  declarations: [
    HuyenComponent,
    HuyenFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[
    ApiHuyenService,

  ]
})
export class HuyenModule { }
