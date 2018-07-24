import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { creditcardinfoComponent } from './creditcardinfo.component';

const routes: Routes = [
  {
    path: '',
    component:creditcardinfoComponent,
    data: {
      title: 'creditcardinfo'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class creditcardinfoRoutingModule {}
