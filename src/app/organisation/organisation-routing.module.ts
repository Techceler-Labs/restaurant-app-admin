import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { OrganisationComponent } from './organisation.component';
import { BranchComponent } from './branch.component';

const routes: Routes = [
  {
    path: 'organisation',
    component: OrganisationComponent,
    data: {
      title: 'Organisation'
    }
  }
  ,
  {
    path: 'organisation/branch',
    component: BranchComponent,
    data: {
      title: 'Branch'
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule {}
