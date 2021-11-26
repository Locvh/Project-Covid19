import { Component, OnInit ,OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { BillInfo } from '../class/bill-info';
import { Bill } from '../class/bill';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfirmService } from 'src/app/service/confirm.service';
@Component({
  selector: 'app-infomation-vnpay',
  templateUrl: './infomation-vnpay.component.html',
  styleUrls: ['./infomation-vnpay.component.css']
})
export class InfomationVnpayComponent implements OnInit ,OnDestroy {

  constructor(  private service: SharedService,private confirmService: ConfirmService ,private router: Router) { }
  selecteAddress: string = '';

  windowRef: any;

  verificationCode: string;

  user: any;


  bill = new Bill();

  billInfo = new BillInfo();

  billList:  BillInfo[]=[];


  billEvent:Subscription = new Subscription();

  isSubmitted : boolean=false;


  input:any;

  message:string;

  filteredOptions=[];
  locationAddress:string;
  currLat: any;
  currLng: any;
  api_key: string;

  formvnpay = new FormGroup({
    receiverName: new FormControl('' ,[Validators.required,Validators.minLength(3)]),
    receiverPhone: new FormControl('', [Validators.required,Validators.pattern('^[0-9]*$')]),
    receiverAddress: new FormControl('',[Validators.required,Validators.minLength(7)])
  });

  ngOnInit(): void {
    this.resetForm();
  }

  get formControls(){
    return this.formvnpay['controls'];
  }

  onSubmit() {
    this.isSubmitted=true;
    var val={
      customerName: this.formvnpay.value.receiverName,
      customerPhone: this.formvnpay.value.receiverPhone,
      customerAddress:this.formvnpay.value.receiverAddress ,
      statusPayment :"PROCESSVNPAY"
    }
    var a1= this.formvnpay.value.receiverAddress;

    if(a1.substr(a1.length - 19)=='Quận 1, Hồ Chí Minh'){
    if(this.formvnpay.value.receiverName!="" && this.formvnpay.value.receiverPhone>0 && this.formvnpay.value.receiverAddress!=""){
        this.confirmService.addForm(val);
        this.router.navigate(['/ConfirmInfomation']);
    }
  }else{
    this.message='Quận của bạn không nằm trong khu vực phục vụ của chúng tôi';
  }

  }

  ngOnDestroy(){
    this.billEvent.unsubscribe();
  }

  autocomplete(){
    this.api_key='iQ4vLSVlXfaD59TdSeRfHp1fXDIhpEJqVJDPKThn';
    this.currLat = 10.772482708117636;
    this.currLng = 106.69890791265118;
    this.locationAddress = this.currLat + "," + this.currLng;
    this.input=this.formvnpay.value.receiverAddress;

    this.billEvent=this.service.autocomplete(this.api_key,this.locationAddress,this.input).subscribe(data => {
      this.filteredOptions=data.predictions;
    })
}

  resetForm() {
    this.formvnpay.reset();
    this.formvnpay.setValue({
      receiverName: '',
      receiverPhone: '',
      receiverAddress: ''
    });
    this.isSubmitted=false;

  }




}
