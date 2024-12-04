import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinhComponent } from './tinh/tinh.component';
import {ApiTinhService} from "../service/api-tinh.service";
import {ReactiveFormsModule} from "@angular/forms";
import { FormTinhComponent } from './form-tinh/form-tinh.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    TinhComponent,
    FormTinhComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  providers: [
    ApiTinhService,

  ]
})
export class TinhModule { }
