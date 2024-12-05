import {model, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainComponent } from '../layout/layout-contain/layout-contain.component';
import { LayoutLoginSignupComponent } from './account/layout-login-signup/layout-login-signup.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';


const routes: Routes = [
   // { path: '**', redirectTo: 'error', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: LayoutContainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      {
        path: 'product',
         loadChildren: ()=>import('./product/product.module').then(module=>module.ProductModule)
      },
      {
        path:'management',
        loadChildren: ()=>import ('./management/management.module').then(module=>module.ManagementModule)
      },
    ],
  },
  {
    path: '',
    component: LayoutLoginSignupComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
