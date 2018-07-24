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
  templateUrl: 'codeconfirmation.component.html'
})
export class codeconfirmationComponent implements OnInit {
    username;
    error;
    constructor(private router : Router) { }
    code;

ngOnInit(){
    this.username=localStorage.getItem("username");
    console.log(this.username);
}
    poolData = { 
        UserPoolId : 'us-east-1_Tamsmqfbk',
        ClientId : '76el96585015scev21vep6j9nq'
    };
     
    userPool = new CognitoUserPool(this.poolData)
    confirmUser(username: string=this.username, code: string=this.code) {
        const userData = {
          Username: username,
          Pool: this.userPool
        };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(code, true, (err, result) => {
          if (err) {
            console.log('There was an error -> ', err)
            this.error=err.message;
          } else {
            console.log('You have been confirmed ')
            this.router.navigate(['/creditcardinfo']);

          }
       })
     }
}
