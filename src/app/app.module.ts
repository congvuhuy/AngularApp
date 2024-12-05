import {APP_INITIALIZER, inject, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from '../layout/layout.module';
import { ProductModule } from './product/product.module';
import { AccountModule } from './account/account.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { AppRoutingModule } from './app-routing.module';
import {ProfileComponent} from "./profile/profile.component";
import {AuthInterceptor} from "./intercepter/auth.interceptor";
import {RouterModule} from "@angular/router";
import {ManagementModule} from "./management/management.module";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ProductModule,
    AccountModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ManagementModule,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // {
    //   provide:APP_INITIALIZER,
    //   useFactory:(injector:Injector)=>()=>{
    //     return new Promise<boolean>((resolve,reject)=>{
    //       if(localStorage.getItem('access_token')){
    //         injector.get(AuthService).getAccountBootstrap().subscribe(
    //           res=>{
    //             injector.get(AuthService).setPermission(res.grantedPolicies)
    //             resolve(true)
    //           },
    //           err=>{
    //             reject(true)
    //           }
    //         )
    //       }else{
    //
    //       }
    //     })
    //   },
    //   deps: [Injector],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
