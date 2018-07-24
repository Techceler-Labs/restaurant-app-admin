import { NgModule } from '@angular/core';

import { menuComponent } from './menu.component';

import { menuRoutingModule } from './menu-routing.module';

@NgModule({
  imports: [ menuRoutingModule ],
  declarations: [menuComponent]
})
export class menuModule { }
