import { NgModule } from '@angular/core';

import { OrganisationComponent } from './organisation.component';
import { BranchComponent } from './branch.component';

import { OrganisationRoutingModule } from './organisation-routing.module';

@NgModule({
  imports: [ OrganisationRoutingModule ],
  declarations: [
    OrganisationComponent,
    BranchComponent
  ]
})
export class OrganisationModule { }
