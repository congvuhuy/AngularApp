import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "../layout/layout.module";
import {ProductModule} from "./product/product.module";
import {AccountModule} from "./account/account.module";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./account/profile/profile.component";
import {LoginComponent} from "./account/login/login.component";
import {LayoutContainComponent} from "../layout/layout-contain/layout-contain.component";
import {LayoutLoginSignupComponent} from "./account/layout-login-signup/layout-login-signup.component";

const routes: Routes=[
  // {
  //   path:'',
  //   component:LayoutContainComponent,
  //   children:[
  //     {path:'product',component:ProductListComponent},
  //     {path:'profile',component:ProfileComponent},
  //   ]
  // },
  // {
  //   path:'',
  //   component:LayoutLoginSignupComponent,
  //   children:[
  //     {path:'',redirectTo:'login',pathMatch:'full'},
  //     {path:'login',component:LoginComponent},
  //
  //   ]
  //
  // }
  {path:'product',component:ProductListComponent},
  {path:'profile',component:ProfileComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent}

]
@NgModule({

  declarations: [
    AppComponent
  ],
  imports:[
    [RouterModule.forRoot(routes)],
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    AccountModule
  ],
  exports:[
    [RouterModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
