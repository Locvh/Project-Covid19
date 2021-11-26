import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
@Component({
  selector: 'app-preparation-seller',
  templateUrl: './preparation-seller.component.html',
  styleUrls: ['./preparation-seller.component.css']
})
export class PreparationSellerComponent implements OnInit ,OnDestroy {

  billEvent :Subscription=new Subscription();

  bills: any = [];

  billFilter: string ='';

  total: number ;

  pageSize: number = 8;

  pageNumber: number = 1;

  status:string;

  loading$ = this.loader.loading$;

  isTransport:string;

  orderId: any;

  ActivateEditPromotion: boolean = false;

  message_note: any;

  constructor(public loader: LoadingService,private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.nextPage();
    this.isTransport=localStorage.getItem("isTransport");
    console.log(this.isTransport);
  }

  onReset(){
    this.billFilter='';
    this.pageNumber=1;
    this.pageNevigation();
}

  ngOnDestroy(){
    this.billEvent.unsubscribe();
  }

  pageNevigation(){
    this.billFilter=this.billFilter||'';
    const sellerId=localStorage.getItem("sellerId");
     this.status='New';
     this.billEvent=this.service.searchBillPagesSeller(sellerId,this.status,this.billFilter,this.pageSize,this.pageNumber).subscribe(data => {
      this.total=data.totalCount;
      this.bills = data.items;
    });
  }

  nextPage() {
    this.router.navigate(['/view-history-seller'], { queryParams: { pageNumber: this.pageNumber} });
    this.pageNevigation();
  }

  CancelOrder(orderId: string) {
    const updateObject = {
      orderId: orderId,
      statusOrder: 'Cancel',
    };
    this.billEvent=this.service.updateBillStatus(updateObject).subscribe((data)=>{
      this.message_note=data;
      this.nextPage();
    });
  }

  ProcessOrder(orderId: string) {
    const updateObject = {
      orderId: orderId,
      statusOrder: 'Processing',
    };
    this.billEvent=this.service.updateBillStatus(updateObject).subscribe(()=>{
      this.nextPage();
    });
  }


  searchBill(){
  this.pageNumber=1;
  this.pageNevigation();
  }


  toBack(){
    this.router.navigate(['/seller',localStorage.getItem("sellerId")]);
  }

  addClick2(item:any) {
    this.orderId=item;
    this.ActivateEditPromotion=true;
  }

  closeClick(){
    this.ActivateEditPromotion=false;
    this.pageNevigation();
  }

}
