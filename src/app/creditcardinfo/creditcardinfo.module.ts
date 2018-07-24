import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { creditcardinfoComponent } from './creditcardinfo.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';  
import { creditcardinfoRoutingModule } from './creditcardinfo-routing.module';

@NgModule({
  imports: [ creditcardinfoRoutingModule, HttpModule, FormsModule,CommonModule],
  declarations: [
    creditcardinfoComponent,
   
  ]
})
export class creditcardinfoModule { }
