import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
@Component({
  selector: 'app-processed-seller',
  templateUrl: './processed-seller.component.html',
  styleUrls: ['./processed-seller.component.css']
})
export class ProcessedSellerComponent implements OnInit,OnDestroy{

    billEvent :Subscription=new Subscription();

    bills: any = [];

    billFilter: string ='';

    total: number ;


    pageSize: number = 8;

    pageNumber: number = 1;

    status:string;

    isTransport:string;

    loading$ = this.loader.loading$;

    orderId: any;

    ActivateEditPromotion: boolean = false;

    constructor(public loader: LoadingService,private service: SharedService, private router: Router) { }


    ngOnInit(): void {
      this.nextPage();
      this.isTransport=localStorage.getItem("isTransport");
    }

    nextPage() {
      this.router.navigate(['/view-history-seller'], { queryParams: { pageNumber: this.pageNumber} });
      this.pageNevigation();
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
      this.status='Processing';
      this.billEvent=this.service.searchBillPagesSeller(sellerId,this.status,this.billFilter,this.pageSize,this.pageNumber).subscribe(data => {
        this.total=data.totalCount;
        this.bills = data.items;
          } );
    }

    addClick2(item:any) {
      this.orderId=item;
      this.ActivateEditPromotion=true;
    }

    closeClick(){
      this.ActivateEditPromotion=false;
      this.pageNevigation();
    }

    FinishOrder(orderId: string) {
      const updateObject = {
        orderId: orderId,
        statusOrder: 'Done',
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
}
