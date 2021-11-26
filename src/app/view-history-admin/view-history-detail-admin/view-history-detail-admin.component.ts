import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-view-history-detail-admin',
  templateUrl: './view-history-detail-admin.component.html',
  styleUrls: ['./view-history-detail-admin.component.css']
})
export class ViewHistoryDetailAdminComponent implements OnInit,OnDestroy {

  billInfoEvent :Subscription=new Subscription();

  billInfo: any = [];

  Info: any = [];

  loading$ = this.loader.loading$;

  @Input() orderId: any;

  constructor(public loader: LoadingService,private service: SharedService,private route: ActivatedRoute) { }

  // orderId: string ;
  totalPrice: string ;
  totalQuantity: string ;
  dateBuy: string ;
  shipFee : string ;
  statusPayment: string ;
  customerAddress: string ;
  customerName: string ;
  customerPhone: string ;
  shopName: string ;
  orderID:string;
  shopAddress:string;
  ngOnInit(): void {
    // this.orderId=this.route.snapshot.params["orderId"];
    this.billInfoEvent=this.service.getBillInfor(this.orderId).subscribe(data=>{
      this.orderID=data[0].orderDetailId;
      this.billInfo=data;
    });
    this.billInfoEvent=this.service.getInfo(this.orderId).subscribe(dataInfo=>{
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

}
