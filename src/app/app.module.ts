import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "../layout/layout.module";
import {ProductModule} from "./product/product.module";
import {AccountModule} from "./account/account.module";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./account/login/login.component";
import {LayoutContainComponent} from "../layout/layout-contain/layout-contain.component";
import {LayoutLoginSignupComponent} from "./account/layout-login-signup/layout-login-signup.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import {SignupComponent} from "./account/signup/signup.component";
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./service/api.service";
import {TinhComponent} from "./tinh-huyen-xa/tinh/tinh.component";

const routes: Routes=[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path:'',
    component:LayoutContainComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'product',component:ProductListComponent},
      {path:'profile',component:ProfileComponent},
      {path:'tinh',component:TinhComponent},
    ]
  },
  {
    path:'',
    component:LayoutLoginSignupComponent,
    children:[
      // {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',component:LoginComponent},
      {path:'signup',component: SignupComponent},

    ]

  }
  // {path:'product',component:ProductListComponent},
  // {path:'profile',component:ProfileComponent},
  // {path:'dashboard',component:DashboardComponent},
  // {path:'',redirectTo:'login',pathMatch:'full'},
  // {path:'login',component:LoginComponent}

]
@NgModule({

  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    AccountModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    [RouterModule],
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
