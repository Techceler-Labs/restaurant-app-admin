import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { menuComponent } from './menu.component';

const routes: Routes = [
  {
    path: '',
    component: menuComponent,
    data: {
      title: 'menu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class menuRoutingModule {}
