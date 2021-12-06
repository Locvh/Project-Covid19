import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { SharedService } from 'src/app/service/shared.service';
// import { BillInfo } from '../class/bill-info';
import { Bill } from 'src/app/model/bill';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-shopping-cart',
  templateUrl: './show-shopping-cart.component.html',
  styleUrls: ['./show-shopping-cart.component.css']
})
export class ShowShoppingCartComponent implements OnInit ,OnDestroy{

  public products : any=[];


  bill = new Bill();

  form: FormGroup;

  constructor(private service: SharedService,private cartService: CartService,private location: Location,private router: Router ) { }


  checkPay:any;

  total:any;

  productEvent:Subscription = new Subscription();

  ngOnInit(): void {
    this.productEvent=this.cartService.getProduct().subscribe(res=>{
      var group_to_values = res.reduce(function (obj, item) {
        obj[item.sellerName] = obj[item.sellerName] || [];
        obj[item.sellerName].push(item);
        return obj;
      }, {});

      var groups = Object.keys(group_to_values).map(function (key) {
        return {sellerName: key, info: group_to_values[key]};
      });

      this.products=groups;
      this.bill.grandTotalPrice= this.cartService.bill.grandTotalPrice;
      this.bill.grandTotalQuantity=this.cartService.bill.grandTotalQuantity;

    });

    this.form = new FormGroup({
      statusPayment: new FormControl('COD', Validators.required)
    });

  }

  checkPayment(){
    if(this.form.value.statusPayment=="COD"){
      this.router.navigate(['/phone-customer']);
    }else if(this.form.value.statusPayment=="PROCESSVNPAY"){
      this.router.navigate(['/infomation-Vnpay']);
    }

  }

  ngOnDestroy(){
    this.productEvent.unsubscribe();
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }

  emtycart(){
    this.cartService.removeAllCart();
  }

  toggleAmount(productId: string, type: string) {
    this.cartService.toggleAmount(productId, type);
  }

  onBack(){
    this.location.back();
  }

  }
