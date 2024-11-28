import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LayoutLoginSignupComponent } from './layout-login-signup/layout-login-signup.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent,
        LayoutLoginSignupComponent
    ],
    exports: [
        ProfileComponent,
    ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    FormsModule
  ]
})
export class AccountModule { }
