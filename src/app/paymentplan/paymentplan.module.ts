import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PaymentplanComponent } from './paymentplan.component';

import { PaymentplanRoutingModule } from './paymentplan-routing.module';

@NgModule({
  imports: [ PaymentplanRoutingModule,HttpModule],
  declarations: [PaymentplanComponent]
})
export class PaymentplanModule { }
