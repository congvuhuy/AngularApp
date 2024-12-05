import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinhComponent } from './tinh/tinh.component';
import {ApiTinhService} from "../service/api-tinh.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormTinhComponent } from './form-tinh/form-tinh.component';
import {TinhRoutingModule} from "./tinh-routing.module";

@NgModule({
  declarations: [
    TinhComponent,
    FormTinhComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TinhRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiTinhService,

  ]
})
export class TinhModule { }
