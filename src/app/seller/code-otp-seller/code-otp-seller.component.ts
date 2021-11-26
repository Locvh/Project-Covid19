import { Component, NgZone, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-code-otp-seller',
  templateUrl: './code-otp-seller.component.html',
  styleUrls: ['./code-otp-seller.component.css']
})
export class CodeOtpSellerComponent implements OnInit {
  otp!: string;
  verify: any;

  otpPhone:string;
  data:string;
  message: string;

  constructor(private router: Router,private ngZone: NgZone) {}

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
      color:'#002171',
    },
  };

  ngOnInit() {
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    this.getPhone();
  }

getPhone(){
  this.data = localStorage.getItem('phone');
  this.otpPhone=this.data.slice(7,11);
}

  onOtpChange(otp: string) {
    this.otp = otp;
  }

  handleClick() {
    var credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        localStorage.setItem('user_data', JSON.stringify(response));
        localStorage.removeItem("phone");
        this.ngZone.run(() => {
          this.router.navigate(['/seller-registration']);
        });
      })
      .catch((error) => {
        this.message="Mã OTP không đúng mời bạn nhập lại"
      });
  }


}
