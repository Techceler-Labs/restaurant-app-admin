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
  templateUrl: 'login.component.html'
})
export class loginComponent {
  isUser: any;
  user;
  pwd;
  error;
   constructor(private router : Router){
  }
   poolData = { 
        UserPoolId : 'us-east-1_Tamsmqfbk',
        ClientId : '76el96585015scev21vep6j9nq'
    };
     
    userPool = new CognitoUserPool(this.poolData)
     
  signinUser(username: string=this.user, password:string=this.pwd) {
    const userData = {
      Username:username,
      Pool: this.userPool
  };
  const cognitoUser = new CognitoUser(userData);
    const authData = {
      Username: username,
      Password: password
  };
  const authDetails = new AWSCognito.AuthenticationDetails(authData);

   cognitoUser.authenticateUser(authDetails, {
    onSuccess: (result) => {
       console.log('You are now Logged in');
       console.log('in hello');
       //this.isUser.next(true);
       console.log('in hello');
       this.router.navigate(['/dashboard']);
       //console.log(this.userPool.getCurrentUser());
    },
    onFailure: (err) => {
      console.log('There was an error during login, please try again -> ', err);
      console.log('out hello');
      this.error=err.message;

    }
  })
}
/// Sign Up User
// signupUser(user: string="shayanshakil", password: string="Shayan134*", email: string="shanistar_94@yahoo.com") {
//   const dataEmail = {
//     Name: 'email',
//     Value: email
//   };
//   const  emailAtt = [new CognitoUserAttribute(dataEmail)];
//   this.userPool.signUp(user,  password, emailAtt, null, ((err, result) => {
//     if (err) {
//       console.log('There was an error ', err);
//     } else {
//       console.log('You have successfully signed up, please confirm your email ')
//     }
//   }))
// }
// confirmUser(username: string="shakil", code: string="618708") {
//   const userData = {
//     Username: username,
//     Pool: this.userPool
//   };

  // const cognitoUser = new CognitoUser(userData);

  // cognitoUser.confirmRegistration(code, true, (err, result) => {
  //   if (err) {
  //     console.log('There was an error -> ', err)
  //   } else {
  //     console.log('You have been confirmed ')
  //   }
  // })
//}
}