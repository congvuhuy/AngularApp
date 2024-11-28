import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';



@NgModule({
    declarations: [
        ProfileComponent,
        SigninComponent
    ],
    exports: [
        ProfileComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AccountModule { }
