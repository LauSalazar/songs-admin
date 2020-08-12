import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoDevPage } from './info-dev.page';

const routes: Routes = [
  {
    path: '',
    component: InfoDevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoDevPageRoutingModule {}
