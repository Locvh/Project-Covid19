import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { Location } from '@angular/common';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-view-history-detail',
  templateUrl: './view-history-detail.component.html',
  styleUrls: ['./view-history-detail.component.css']
})
export class ViewHistoryDetailComponent implements OnInit,OnDestroy {


  billInfoEvent :Subscription=new Subscription();

  billInfo: any = [];

  Info: any = [];
  loading$ = this.loader.loading$;

  @Input() orderId: any;

  constructor(public loader: LoadingService,private service: SharedService,private route: ActivatedRoute, private router: Router) { }

  totalPrice: string ;
  totalQuantity: string ;
  dateBuy: string ;
  shipFee : string ;
  statusPayment: string ;
  customerAddress: string ;
  customerName: string ;
  customerPhone: string ;
  shopName: string ;
  shopAddress: string ;
  shipName: string ;

  orderID:string;
  ngOnInit(): void {
    // this.orderId=this.route.snapshot.params["orderId"];
    this.billInfoEvent=this.service.getBillInfor(this.orderId).subscribe(data=>{
      console.log(data);
      this.orderID=data[0].orderDetailId;
      this.billInfo=data;
    });
    this.billInfoEvent=this.service.getInfo(this.orderId).subscribe(dataInfo=>{
      this.shipName=dataInfo.shipName;
      this.shopAddress=dataInfo.addressShop;
      this.shopName=dataInfo.shopName;
      this.totalPrice=dataInfo.totalPrice;
      this.totalQuantity=dataInfo.totalQuantity;
      this.dateBuy=dataInfo.dateBuy;
      this.shipFee=dataInfo.shipFee;
      this.statusPayment=dataInfo.statusPayment;
      this.customerAddress=dataInfo.customer.customerAddress;
      this.customerName=dataInfo.customer.customerName;
      this.customerPhone=dataInfo.customer.customerPhone;
    });

  }


  ngOnDestroy(){
    this.billInfoEvent.unsubscribe();
  }


// onBack(){
//   this.router.navigate(['/show-view-history']);
// }
}
