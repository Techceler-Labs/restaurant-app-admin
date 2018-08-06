import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { forgotpasswordComponent } from './forgotpassword.component';

import { forgotpasswordRoutingModule } from './forgotpassword-routing.module';

@NgModule({
  imports: [ forgotpasswordRoutingModule,FormsModule,CommonModule ],
  declarations: [forgotpasswordComponent]
})
export class forgotpasswordModule { }
