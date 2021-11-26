import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { LoadingService } from '../service/loading.service';
import { LoginService } from '../service/login.service';
import { SharedService } from '../service/shared.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit,OnDestroy {

  hide =true;

  adminEvent :Subscription =new Subscription();

  form: FormGroup ;

  valid: string | undefined ;

  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService,private checklogin:LoginService) {
  }


  ngOnInit(): void {
  this.form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  // this.checklogin2();
  }

  ngOnDestroy(){
    this.adminEvent.unsubscribe();
  }

  login() {
    var val = {
        username: this.form.value.username,
        password: this.form.value.password
    };
    this.adminEvent= this.service.getLoginAccount(val).subscribe(
      res =>{
      localStorage.setItem('jwt',res);
      this.checklogin.getRole();
      // this.getRole();
      },
      err =>{
        this.valid=err.error;
      }
      )
  }

  // checklogin2(){
  //     this.checklogin.checkLogin();
  // }


}
