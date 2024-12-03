import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainComponent } from '../layout/layout-contain/layout-contain.component';
import { LayoutLoginSignupComponent } from './account/layout-login-signup/layout-login-signup.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import {TinhComponent} from "./tinh/tinh/tinh.component";
import {HuyenComponent} from "./huyen/huyen/huyen.component";
import {XaComponent} from "./xa/xa/xa.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: LayoutContainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductListComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'tinh', component: TinhComponent },
      { path: 'huyen', component: HuyenComponent },
      { path: 'xa', component: XaComponent }
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
