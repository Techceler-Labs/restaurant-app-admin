import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import   * as AWSCognito from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AwsService } from '../services/aws.service';
import { Callback } from '../services/aws.service';
import { Subscription } from 'rxjs';
import { CognitoIdentity } from 'aws-sdk';
import { CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Component({
  templateUrl: 'forgotpassword.component.html'
})
export class forgotpasswordComponent implements OnInit {
user;
verificationCode;
newPassword;
ispresent:boolean=false;
  constructor() { }
  ngOnInit(){
    this.user=localStorage.getItem("username");
    console.log(this.user);
    console.log(this.ispresent);
    
  }
  poolData = { 
    UserPoolId : 'us-east-1_Tamsmqfbk',
    ClientId : '76el96585015scev21vep6j9nq'
};
 
userPool = new CognitoUserPool(this.poolData);

resetPassword(username:string=this.user) {
  
  const userData = {
    Username:username,
    Pool: this.userPool
};
const cognitoUser = new CognitoUser(userData);

cognitoUser.forgotPassword({
  onSuccess:(result)=> {
    console.log("success");
      console.log('call result: ' + result);
  },
  onFailure:(err)=> {
    console.log("fail");
      alert(err);
  },
  inputVerificationCode() { // this is optional, and likely won't be implemented as in AWS's example (i.e, prompt to get info)
      var verificationCode = this.verificationCode;
      var newPassword = this.newPassword;
      cognitoUser.confirmPassword(verificationCode, newPassword, this);
  }
});
}
present(){
  this.ispresent=true;
  console.log(this.ispresent);
}
}
