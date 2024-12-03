import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XaComponent } from './xa/xa.component';
import { XaFormComponent } from './xa-form/xa-form.component';
import {ApiXaService} from "../service/api-xa.service";



@NgModule({
  declarations: [
    XaComponent,
    XaFormComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    ApiXaService
  ]

})
export class XaModule { }
