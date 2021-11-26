import { Component, OnInit,OnDestroy } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { SharedService } from 'src/app/service/shared.service';
import { BillInfo } from '../class/bill-info';
import { Bill } from '../class/bill';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase';
import { WindowService } from 'src/app/service/window.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfirmService } from 'src/app/service/confirm.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.css']
})

export class InfomationComponent implements OnInit,OnDestroy {

  constructor(private service: SharedService, private cartService: CartService,private router: Router, private confirmService: ConfirmService,private win:WindowService, private location: Location) { }
  selecteAddress: string = '';

  windowRef: any;


  verificationCode: string;

  user: any;

  nextClicked = false;

//-------------------------------------------------

  bill = new Bill();

  billInfo = new BillInfo();

  billList:  BillInfo[]=[];

  billEvent:Subscription = new Subscription();

  isSubmitted : boolean=false;

  result:string;

  userData: any;

  userDataPhone: any;

  input:any;

  filteredOptions=[];

  locationAddress:string;

  currLat: any;

  currLng: any;

  api_key: string;

  message:string;

  form = new FormGroup({
    receiverName: new FormControl('' ,[Validators.required,Validators.minLength(3)]),
    receiverAddress: new FormControl('',[Validators.required,Validators.minLength(7)])
  });

  ngOnInit(): void {
    this.resetForm();
  }

  get formControls(){
    return this.form['controls'];
  }

  onSubmit() {
    this.isSubmitted=true;

      var data = JSON.parse(localStorage.getItem('user_data'));
      this.userData = data.user.phoneNumber;
      this.userDataPhone=this.userData.replace('+84','0');
    var val={
      customerName: this.form.value.receiverName,
      customerPhone: this.userDataPhone,
      customerAddress:this.form.value.receiverAddress,
      statusPayment :"COD"
    }
    var a1= this.form.value.receiverAddress;
    if(a1.substr(a1.length - 19)=='Quận 1, Hồ Chí Minh'){
    if(this.form.value.receiverName!="" && this.form.value.receiverAddress!=""){
    this.confirmService.addForm(val);
    this.router.navigate(['/ConfirmInfomation']);
    }}
    else{
      this.message='Quận của bạn không nằm trong khu vực phục vụ của chúng tôi';
    }

  }

  ngOnDestroy(){
    this.billEvent.unsubscribe();
  }

  onBack(){
    this.location.back();
  }

  autocomplete(){
    this.api_key='iQ4vLSVlXfaD59TdSeRfHp1fXDIhpEJqVJDPKThn';
    this.currLat = 10.772482708117636;
    this.currLng = 106.69890791265118;
    this.locationAddress = this.currLat + "," + this.currLng;
    this.input=this.form.value.receiverAddress;

    this.billEvent=this.service.autocomplete(this.api_key,this.locationAddress,this.input).subscribe(data => {
      this.filteredOptions=data.predictions;
    })
}



   resetForm() {
    this.form.reset();
    this.form.setValue({
      receiverName: '',
      receiverPhone: '',
      receiverAddress: '',
      wards:''
    });
    this.isSubmitted=false;
  }
}
