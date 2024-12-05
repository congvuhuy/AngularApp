import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TinhComponent} from "./tinh/tinh.component";


const routes: Routes = [
  {
    path: '',
    component:TinhComponent
  },
  // {
  //   path:'huyen',
  //   component: HuyenComponent
  // },
  // {
  //   path:'xa',
  //   component: XaComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinhRoutingModule {}
