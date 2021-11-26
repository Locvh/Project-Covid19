import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
@Component({
  selector: 'app-cancel-seller',
  templateUrl: './cancel-seller.component.html',
  styleUrls: ['./cancel-seller.component.css']
})
export class CancelSellerComponent implements OnInit  ,OnDestroy {

  billEvent :Subscription=new Subscription();

  bills: any = [];

  billFilter: string ='';

  total: number ;


  pageSize: number = 8;

  pageNumber: number = 1;

  status:string;

  loading$ = this.loader.loading$;

  orderId: any;

  ActivateEditPromotion: boolean = false;

  constructor(public loader: LoadingService,private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    // this.searchBill();
    this.nextPage();
  }

  onReset(){
    this.billFilter='';
    this.pageNumber=1;
    this.pageNevigation();
}

  ngOnDestroy(){
    this.billEvent.unsubscribe();
  }

  nextPage() {
    this.router.navigate(['/view-history-seller'], { queryParams: { pageNumber: this.pageNumber} });
    this.pageNevigation();
  }

  pageNevigation(){
    this.billFilter=this.billFilter||'';
    //truyền vô đây nè,
    const sellerId=localStorage.getItem("sellerId");
     this.status='Cancel';
     this.billEvent=this.service.searchBillPagesSeller(sellerId,this.status,this.billFilter,this.pageSize,this.pageNumber).subscribe(data => {
      this.total=data.totalCount;
      this.bills = data.items;
        } );
  }

  toBack(){
    this.router.navigate(['/seller',localStorage.getItem("sellerId")]);
  }

  searchBill(){
    this.pageNumber=1;
    this.pageNevigation();
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