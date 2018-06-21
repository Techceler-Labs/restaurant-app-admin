import { NgModule } from '@angular/core';

import { SubscriptionPlanComponent } from './subscription-plan.component';

import { SubscriptionRoutingModule } from './subscription-routing.module';

@NgModule({
  imports: [ SubscriptionRoutingModule ],
  declarations: [
    SubscriptionPlanComponent
  ]
})
export class OrganisationModule { }
