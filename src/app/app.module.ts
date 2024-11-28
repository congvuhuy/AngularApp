import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "../layout/layout.module";
import {ProductModule} from "./product/product.module";
import {AccountModule} from "./account/account.module";
import {FormsModule} from "@angular/forms";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductFormComponent} from "./product/product-form/product-form.component";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
