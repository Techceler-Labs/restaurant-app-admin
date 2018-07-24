import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {codeconfirmationComponent } from './codeconfirmation.component';
import { codeconfirmationRoutingModule } from './codeconfirmation-routing.module';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';  

@NgModule({
  imports: [codeconfirmationRoutingModule,HttpModule, FormsModule,CommonModule ],
  declarations: [codeconfirmationComponent]
})
export class codeconfirmationModule { }
