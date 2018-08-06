
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
@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  planid;  
  user;
  pwd;
  email;
  error;
  organisation;
  constructor(private route: ActivatedRoute,private router : Router) { }
  
  poolData = {
     UserPoolId : 'us-east-1_Tamsmqfbk',
     ClientId : '76el96585015scev21vep6j9nq'
};
 
  userPool = new CognitoUserPool(this.poolData)
  ngOnInit(){
    this.route.queryParams
    .subscribe(params => {
      this.planid=params.id;
      console.log(this.planid);
    });
  }

  //navigatetopaymentplan(){
    //.router.navigate(['/creditcardinfo'],{ queryParams: {id:this.planid} });
  //}

  signupUser(user: string=this.user, password: string=this.pwd, email: string=this.email) {
    const dataEmail = {
      Name: 'email',
      Value: email
  };
  
  const  emailAtt = [new CognitoUserAttribute(dataEmail)];
 

  this.userPool.signUp(user,  password, emailAtt, null, ((err, result) => {
    if (err) {
      console.log('There was an error ', err);
      this.error=err.message;
      
    } else {
      console.log('You have successfully signed up, please confirm your email ');
      localStorage.setItem("username",this.user);
      localStorage.setItem("pwd",this.pwd);
      this.router.navigate(['/codeconfirmation']);
      
      }
   }))
  
  }
}
