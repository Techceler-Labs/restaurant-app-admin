import { Component, OnInit } from '@angular/core';
import { CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Router } from '@angular/router';
import   * as AWSCognito from 'amazon-cognito-identity-js';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
username;
  poolData = { 
    UserPoolId : 'us-east-1_Tamsmqfbk',
    ClientId : '76el96585015scev21vep6j9nq'
};
userPool = new CognitoUserPool(this.poolData)

constructor(private router : Router){
}
  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(){
    var cognitoUser = this.userPool.getCurrentUser();

    if (cognitoUser != null) {
        cognitoUser.getSession(function(err, session) {
            if (err) {
                alert(err);
                return;
            }
            console.log('session validity: ' + session.isValid());
           //this.username=cognitoUser.getUsername();
            //console.log(this.username);
        });
    }
    else{
      console.log("not loged in");
    }

  }
  logout(){
    var cognitoUser = this.userPool.getCurrentUser();
  
    if (cognitoUser != null) {
      cognitoUser.signOut();
      console.log("signout")
      this.router.navigate(['/login']);

    }
    else{
      console.log("not signed in");
    }
  }
}
