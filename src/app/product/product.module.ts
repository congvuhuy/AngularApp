import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {ProductService} from "../service/product.service";


@NgModule({
    declarations: [
        ProductListComponent,
        ProductFormComponent,
    ],
    exports: [
        ProductListComponent,
        ProductFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterLink
    ],
  providers:[
    ProductService
  ]
})
export class ProductModule { }

