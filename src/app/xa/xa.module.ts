import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XaComponent } from './xa/xa.component';
import { XaFormComponent } from './xa-form/xa-form.component';
import {ApiXaService} from "../service/api-xa.service";
import {ReactiveFormsModule} from "@angular/forms";
import {ApiHuyenService} from "../service/api-huyen.service";
import {ApiTinhService} from "../service/api-tinh.service";



@NgModule({
  declarations: [
    XaComponent,
    XaFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[
    ApiXaService,
    ApiHuyenService,
    ApiTinhService
  ]

})
export class XaModule { }
