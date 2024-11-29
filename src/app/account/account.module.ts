import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LayoutLoginSignupComponent } from './layout-login-signup/layout-login-signup.component';
import {RouterModule, RouterOutlet, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { SignupComponent } from './signup/signup.component';



@NgModule({
    declarations: [
        LoginComponent,
        LayoutLoginSignupComponent,
        SignupComponent
    ],
    exports: [
    ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    RouterLink,
    FormsModule
  ]

})
export class AccountModule { }
