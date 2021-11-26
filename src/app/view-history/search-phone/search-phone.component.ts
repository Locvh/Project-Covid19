import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { WindowService } from 'src/app/service/window.service';
import { Location } from '@angular/common';
import firebase from 'firebase';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoadingService } from 'src/app/service/loading.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-search-phone',
  templateUrl: './search-phone.component.html',
  styleUrls: ['./search-phone.component.css']
})
export class SearchPhoneComponent implements OnInit ,OnDestroy {


  billEvent :Subscription=new Subscription();

  bills: any = [];

  pageSize: number = 3;

  pageNumber: number = 1;

  total: number ;

  status:string;

  //-----------------------------------------------
  windowRef: any;

  verificationCode: string;


  // user1:string;

  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService,private win: WindowService, private router: Router, private location: Location) { }


  form = new FormGroup({
    phoneFilter: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {

    this.windowRef = this.win.windowRef;

    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebaseConfig);
   }else {
      firebase.app();
   }

    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container'
    );

    this.windowRef.recaptchaVerifier.render().then(widgetId => {
      this.windowRef.recaptchaWidgetId = widgetId;
    });



  }

  ngOnDestroy(){
      this.billEvent.unsubscribe();


    }

    onBack(){
      this.location.back();
    }



  sendLoginCode() {
      const appVerifier = this.windowRef.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber('+84'+this.form.value.phoneFilter, appVerifier)
        .then(result => {
          localStorage.setItem('verificationId',JSON.stringify(result.verificationId));
          localStorage.setItem('phone',JSON.stringify(this.form.value.phoneFilter));
          this.router.navigate(['/codeOTP']);
        })
        .catch(error => console.log('error', error));
    }



}
