import { Component, Injectable, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
@Component({
  moduleId: module.id,
  selector: 'sd-stripe-form',
  templateUrl: 'paymentplan.component.html'
})

export class PaymentplanComponent implements OnInit {
  plan_id; 
  tier_1;
  tier_2;
  tier_3;

  ngOnInit() {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer sk_test_WZsveb2QAfyEC01MQwUapsk2');
    this.http.get('https://api.stripe.com/v1/plans ',{headers: headers })
      .subscribe((resp) => {
      //console.log(resp.json().data[0].amount);
      this.tier_1=resp.json().data[0].amount;
      console.log(this.tier_1);
      this.tier_2=resp.json().data[1].amount;
      console.log(this.tier_2);
      this.tier_3=resp.json().data[2].amount;
      console.log(this.tier_3);
  });
}
  constructor(private http: Http,private router : Router){}
    clickbasic(){
     localStorage.setItem(this.plan_id,'11');
     this.router.navigate(['/pages/register'],{ queryParams: {id:this.plan_id} });
     //console.log(this.plan_id);
     // this.router.navigate(['https://test12341234.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=76el96585015scev21vep6j9nq&redirect_uri=https://google.com'],{ queryParams: {id:this.plan_id} });
  }
   clickenterprise(){
      localStorage.setItem('plan_id','4');
      //this.plan_id=4;
      //console.log(this.plan_id);
      this.router.navigate(['/pages/register'],{ queryParams: {id:this.plan_id} });
  }
    clickstandard(){
      localStorage.setItem('plan_id','3');
      //this.plan_id=3;
      //console.log(this.plan_id);
      this.router.navigate(['/pages/register'],{ queryParams: {id:this.plan_id} });
      //this.router.navigate(['/pages/register'],{ queryParams: {id:this.plan_id} });
  }
}

