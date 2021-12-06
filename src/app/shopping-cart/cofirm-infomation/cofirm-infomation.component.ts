import { Component, OnInit,OnDestroy  } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { ConfirmService } from 'src/app/service/confirm.service';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
import { BillInfo } from 'src/app/model/bill-info';

@Component({
  selector: 'app-cofirm-infomation',
  templateUrl: './cofirm-infomation.component.html',
  styleUrls: ['./cofirm-infomation.component.css']
})
export class CofirmInfomationComponent implements OnInit ,OnDestroy {

  public products : any=[];

  public Listproduct : any=[];

  address : any=[];

  billList:  BillInfo[]=[];

  billEvent:Subscription = new Subscription();

  total:any;

  totalShip:number;

  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService,private service: SharedService,private confirmService: ConfirmService, private cartService:CartService,private router: Router) { }

  info:any;
  ngOnInit(): void {

    this.billEvent=this.confirmService.getProduct().subscribe(res=>{
      this.info=res;
    });
    this.total=this.cartService.getTotalPrice();


    this.billEvent=this.cartService.getProduct().subscribe(res=>{

      var group_to_values = res.reduce(function (obj, item) {
        obj[item.sellerName] = obj[item.sellerName] || [];
        obj[item.sellerName].push(item);
        return obj;
      }, {});

      var groups = Object.keys(group_to_values).map(function (key) {
        return {sellerName: key, info: group_to_values[key]};
      });
      this.products=groups;
      for( const id of this.products){
      this.service.getShip(this.info.customerAddress,id.info[0].sellerId).subscribe(data=> {
        this.address.push(data);
        let grandTotal=0;
          for (const val of this.address) {
            grandTotal += val.shipFee
        }
        // this.totalShip=grandTotal;
        localStorage.setItem('totalShip',JSON.stringify(grandTotal));
        this.totalShip=JSON.parse(localStorage.getItem("totalShip"));
      });
      }
    });

  }



submit(){
   for(var e of this.cartService.CartItemList){
       this.billList.push({productId:e.productId,priceProduct:e.promotionPrice,quantity:e.quantity,subTotal:e.promotionPrice*e.quantity,originalPrice:e.unitPrice});
   }

    var val = {
      environment: "web",
      orderDetails:[...this.billList],
      totalOrder:{
        statusPayment :this.info.statusPayment
      },
      customer:{
      customerName: this.info.customerName,
      customerPhone: this.info.customerPhone,
      customerAddress:this.info.customerAddress,
     }
  };
      this.billEvent=this.service.addOrder(val).subscribe(res => {
        if(this.info.statusPayment=="PROCESSVNPAY"){
          this.resetForm();
          window.location.href =res.url;
        }else if(this.info.statusPayment=="COD"){
          this.resetForm();
          this.router.navigate(['/cash-return']);
        }
    });


}

resetForm(){
    localStorage.removeItem("info");
    localStorage.removeItem("_grecaptcha");
    localStorage.removeItem("user_data");
    localStorage.removeItem("verificationId");
    this.cartService.confirmBeforeOrder();
  }

  ngOnDestroy(){
    this.billEvent.unsubscribe();
  }
}
