import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sd-stripe-form',
  templateUrl: 'creditcardinfo.component.html'
})
export class creditcardinfoComponent implements OnInit {
  customer;
  card;
  email=null;
  token;
  planid;  
  err:string;
  erre:string;

  constructor(private http: Http,private route: ActivatedRoute,private router : Router,private cd : ChangeDetectorRef) { }
  ngOnInit(){
    this.planid=localStorage.getItem('plan_id');
    console.log(this.planid);
    // this.route.queryParams
    // .subscribe(params => {
    //   this.planid=params.id;
    //   console.log(this.planid);

    //});
  }
  // openCheckout() {
  //   var handler = (<any>window).StripeCheckout.configure({
  //     key: 'pk_test_iSrpv4ETA2vHZUgTd1lkfjoD',
  //     locale: 'auto',
  //     token: function (token: any) {
  //       // You can access the token ID with `token.id`.
  //       // Get the token ID to your server-side code for use.
  //       console.log(token.id);
  //       console.log(token);
  //       console.log(token.card.id)
  //     }
  //   });

  //   handler.open({
  //     name: 'Demo Site',
  //     description: '2 widgets',
  //     amount: 10
  //   });

  // }
  
  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken({
      name:form.email.value,
      number: form.cardNumber.value,
      exp_month: form.expMonth.value,
      exp_year: form.expYear.value,
      cvc: form.cvc.value
    }, (status: number, response: any) => {
      if (status === 200 && this.email!=="null") {
        console.log('200');
        this.token = response.id;
        this.chargeCard(this.token);
        //console.log(response);
        //console.log(response.card.id)
        this.card=response.card.id;
        console.log(this.email);
       }
      else {
        //this.err="please fill out the required questions";
        this.err=response.error.message;
        this.cd.detectChanges();
        console.log(this.err);
        ///alert(this.err);
        //console.log(this.err);
      }
     });
}
chargeCard(token: string) {
   //let amount = 1200;
    let currency = "usd";
   //FOR CUStOMER CREAtION
    const headers = new Headers();
    let body21 = new URLSearchParams();
    body21.set('email', this.email );
    headers.append('Authorization', 'Bearer sk_test_WZsveb2QAfyEC01MQwUapsk2');
    headers.append('Content-Type','application/x-www-form-urlencoded');
    this.http.post('https://api.stripe.com/v1/customers',body21.toString(),{headers: headers })
      .subscribe((resp) => {
      //console.log(resp.json().id);
      //console.log(resp.json().card);
      this.customer=resp.json().id;
      //console.log(this.customer);
      console.log('customer created');

      //FOR SOURCE CREAtION
    let body1 = new URLSearchParams();
    body1.set('source', this.token );
    headers.append('Content-Type','application/x-www-form-urlencoded');
    this.http.post('https://api.stripe.com/v1/customers/'+ this.customer+'/sources ',body1.toString(),{headers: headers })
      .subscribe((resp) => {
      console.log('source created');

      //FOR CHARGING CUStOMER
    // let body = new URLSearchParams();
    // body.set('amount', '1200');
    // body.set('currency', currency);
    // body.set('customer', this.customer);
    // headers.append('Content-Type','application/x-www-form-urlencoded');
    // this.http.post('https://api.stripe.com/v1/charges',body.toString(),{headers: headers })
    //    .subscribe(resp => {
    //     console.log('charged');
       //console.log(resp);
       
       //FOR SUBSCRIPtION
    let body = new URLSearchParams();
    body.set('items[0][plan]', this.planid);
    body.set('customer', this.customer);
    //body.set('billing', 'send_invoice');
    //body.set('days_until_due','30');
    //body.set('receipt_email', this.email);
    
     headers.append('Content-Type','application/x-www-form-urlencoded');
    this.http.post('https://api.stripe.com/v1/subscriptions',body.toString(),{headers: headers })
        .subscribe(resp => {
         console.log('subscribed');
         this.router.navigate(['/dashboard'])
        //console.log(resp);
         // })
       })
       })
      })
     // console.log(this.customer);
      
    }
}   