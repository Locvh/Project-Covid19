import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit , OnDestroy {
  hide =true;

  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService,private service: SharedService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  // form: FormGroup;

  sellerEvent: Subscription = new Subscription();

  sellers: any = [];

  sellerId: string;

  message:string;

  message1:string;

  form = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   oldPassword: new FormControl('', [Validators.required]),
    //   newPassword: new FormControl('', [Validators.required]),
    //   confirmPassword: new FormControl('', [Validators.required]),
    // });

    // this.reset();
  }

  get formControls() {
    return this.form['controls'];
  }

  isSubmitted: boolean = false;

  updateData() {
    this.isSubmitted = true;
    this.sellerId = localStorage.getItem("sellerId");
    this.sellerEvent = this.service.getInfoSeller(this.sellerId).subscribe(res => {
      this.sellers = res;
      if (this.form.value.newPassword === this.form.value.confirmPassword && this.form.value.oldPassword === this.sellers.password && this.form.value.newPassword.length>=8) {
        var val = {
          sellerId: this.sellerId,
          password: this.form.value.confirmPassword,
        };
        this.sellerEvent = this.service.updatePassword(val).subscribe(res => {
          this.reset();
        });
      }
      else if(this.form.value.oldPassword != this.sellers.password && this.form.value.oldPassword !="") {
        this.message="M???t kh???u c?? kh??ng ????ng ";
        }
      else if (this.form.value.newPassword != this.form.value.confirmPassword && this.form.value.oldPassword !="") {
        this.message="Vui l??ng nh???p m???t kh???u m???i v?? x??c nh???n m???t kh???u ph???i gi???ng nhau";
      }
      else if(this.form.value.newPassword.length<8&& this.form.value.oldPassword !="" ){
        this.message="M???t kh???u m???i ph???i l???n h??n 8 k?? t???";
      }
    });
  }

  reset(){
    this.form.reset();
    this.form.setValue({
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    this.message='???? thay ?????i th??nh c??ng';
    this.isSubmitted = false;
  }

  ngOnDestroy(){
    this.sellerEvent.unsubscribe();
  }

  onBack() {
    this.location.back();
  }

}
