import { NgModule } from '@angular/core';
import { loginComponent } from './login.component';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { loginRoutingModule } from './login-routing.module';
//import { MatRippleModule } from '@angular/material';
import { AwsService } from '../services/aws.service';
import { CommonModule } from '@angular/common'; 
//import { MdInputModule, MdButtonModule, MdToolbarModule, MdCardModule, MdRadioModule, MdDialogModule, MdProgressSpinnerModule, MdChipsModule } from '@angular/material';

@NgModule({
  imports: [ loginRoutingModule,
    FormsModule,
    HttpModule,
    CommonModule
    //BrowserAnimationsModule,
    ],
    providers: [
      AwsService
    ],
  declarations: [
   loginComponent,
   
  ]
})
export class loginModule { }
