import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { forgotpasswordComponent } from './forgotpassword.component';

const routes: Routes = [
  {
    path: '',
    component:forgotpasswordComponent,
    data: {
      title: 'forgotpassword'
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class forgotpasswordRoutingModule {}
