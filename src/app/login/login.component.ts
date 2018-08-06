import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import   * as AWSCognito from 'amazon-cognito-identity-js';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { EmailValidator } from '../../../node_modules/@angular/forms';


@Component({
  templateUrl: 'login.component.html'
})
export class loginComponent implements OnInit {
  isUser: any;
  user="";
  pwd;
  
  echeck2;
  error;
  emailarray=[];
 constructor(private router : Router, private http: Http){
  }
  ngOnInit(){
      
      const headers = new Headers();
       headers.append('Authorization', 'Bearer sk_test_WZsveb2QAfyEC01MQwUapsk2');
       this.http.get('https://api.stripe.com/v1/customers',{headers:headers })
         .subscribe((resp) => {
        // console.log(resp.json().data[0].email);
        console.log(resp.json().data.length);
       for(var i = 1; i < resp.json().data.length; i++){
         this.emailarray[i]=resp.json().data[i].email;
         console.log(this.emailarray[i]);
       }
      })
      

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
       if (cognitoUser != null) {
        cognitoUser.getSession(function(err, session) {
            if (err) {
                alert(err);
                return;
            }
           //console.log(session.getIdToken().payload.email);
           let emailcheck=session.getIdToken().payload.email;
           localStorage.setItem("emailcheck",emailcheck);
          });
       }
       this.echeck2=localStorage.getItem("emailcheck");
        console.log(this.echeck2);  
        if(this.echeck2){
          console.log("welcome");
        }
        else{
          console.log("please pay");
        }
      //localStorage.setItem("pwd",this.pwd);
       //this.router.navigate(['/dashboard']);
       //console.log(this.userPool.getCurrentUser());
  },
    onFailure: (err) => {
      console.log('There was an error during login, please try again -> ', err);
      console.log('out hello');
      this.error=err.message;
    }
  })
  }
  resetPassword(username:string=this.user) {
  
    console.log(this.user);
    const userData = {
      Username:username,
      Pool: this.userPool
  };
  const cognitoUser = new CognitoUser(userData);
  
  cognitoUser.forgotPassword({
    onSuccess:(result)=> {
      console.log("success");
        console.log('call result: ' + result);
        this.error="";
    },
    onFailure:(err)=> {
      console.log("fail");
    this.error="Username or valid information required";
     //alert(err);
    },
    inputVerificationCode() { // this is optional, and likely won't be implemented as in AWS's example (i.e, prompt to get info)
    //this.router.navigate(['/forgotpassword']);
        var verificationCode =prompt('Please input verification code ', '');
        var newPassword = prompt('Enter new password ', '');
        cognitoUser.confirmPassword(verificationCode, newPassword, this);
    }
  });
}
// getinfo(){
//   var cognitoUser = this.userPool.getCurrentUser();

//     if (cognitoUser != null) {
//         cognitoUser.getSession(function(err, session) {
//             if (err) {
//                 alert(err);
//                 return;
//             }
//             console.log('session validity: ' + session.isValid());
//             console.log('session token: ' + session.getIdToken().payload.email);
//             console.log(session);
            
            
//         });
//     }
//     else{
//       console.log("not loged in");
//     }
//  }


//}
}