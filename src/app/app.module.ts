import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from '../layout/layout.module';
import { ProductModule } from './product/product.module';
import { AccountModule } from './account/account.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';
import { AppRoutingModule } from './app-routing.module';
import {ProfileComponent} from "./profile/profile.component";
import {TinhModule} from "./tinh/tinh.module";
import {HuyenModule} from "./huyen/huyen.module";
import {XaModule} from "./xa/xa.module";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ProductModule,
    AccountModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TinhModule,
    HuyenModule,
    XaModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
