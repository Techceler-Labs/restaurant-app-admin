import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { codeconfirmationComponent } from './codeconfirmation.component';

const routes: Routes = [
  {
    path: '',
    component:codeconfirmationComponent,
    data: {
      title: 'codeconfirmation'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class codeconfirmationRoutingModule {}
