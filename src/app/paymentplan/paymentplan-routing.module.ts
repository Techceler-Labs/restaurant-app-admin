import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { PaymentplanComponent } from './paymentplan.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentplanComponent,
    data: {
      title: 'Paymentplan'
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentplanRoutingModule {}
