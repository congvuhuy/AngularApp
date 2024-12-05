import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TinhComponent} from "../tinh/tinh/tinh.component";
import {HuyenComponent} from "../huyen/huyen/huyen.component";
import {XaComponent} from "../xa/xa/xa.component";

const routes: Routes = [
  {
    path: 'huyen',
    loadChildren: ()=>import('../huyen/huyen.module').then(module=>module.HuyenModule)
  },
  {
    path: 'tinh',
    loadChildren: ()=>import('../tinh/tinh.module').then(module=>module.TinhModule)
  },
  {
    path: 'xa',
    loadChildren: ()=>import('../xa/xa.module').then(module=>module.XaModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
