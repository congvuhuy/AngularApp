import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HuyenComponent} from "./huyen/huyen.component";


const routes: Routes = [
  {
    path: '',
    component:HuyenComponent
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
export class HuyenRoutingModule {}
