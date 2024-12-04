import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from '../layout/layout.module';
import { ProductModule } from './product/product.module';
import { AccountModule } from './account/account.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';
import { AppRoutingModule } from './app-routing.module';
import {ProfileComponent} from "./profile/profile.component";
import {TinhModule} from "./tinh/tinh.module";
import {HuyenModule} from "./huyen/huyen.module";
import {XaModule} from "./xa/xa.module";
import {AuthInterceptor} from "./intercepter/auth.interceptor";

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
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
