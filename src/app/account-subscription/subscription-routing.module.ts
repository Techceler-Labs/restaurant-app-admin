import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { SubscriptionPlanComponent } from './subscription-plan.component';

const routes: Routes = [
  {
    path: 'plan',
    component: SubscriptionPlanComponent,
    data: {
      title: 'Our Plans'
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule {}
