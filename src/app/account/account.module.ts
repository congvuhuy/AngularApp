import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LayoutLoginSignupComponent } from './layout-login-signup/layout-login-signup.component';



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
        CommonModule
    ]
})
export class AccountModule { }
