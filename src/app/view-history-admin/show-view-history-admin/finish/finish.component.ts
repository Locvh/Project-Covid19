import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { saveAs } from 'file-saver';
import { LoadingService } from 'src/app/service/loading.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit ,OnDestroy {

  billEvent :Subscription=new Subscription();

  bills: any = [];

  billFilter: string ='';

  total: number ;

  dateForm: string ='';

  dateTo: string ='';

  pageSize: number = 8;

  pageNumber: number = 1;

  status:string;

  loading$ = this.loader.loading$;

  message:string;

  orderId: any;

  ActivateEditPromotion: boolean = false;

  constructor(public loader: LoadingService,private service: SharedService, private router: Router) { }

  ngOnInit(): void {
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

  pageNevigation(){
    this.billFilter=this.billFilter||'';
    this.status='Done';
    this.billEvent=this.service.searchBillPages(this.status,this.billFilter,this.pageSize,this.pageNumber).subscribe(data => {
      this.total=data.totalCount;
      this.bills = data.items;
        } );
      }

  nextPage() {
    this.router.navigate(['/view-history-admin'], { queryParams: { pageNumber: this.pageNumber} });
    this.pageNevigation();
  }

  ProcessOrder(billID: string) {
    let bill = this.bills.find((b) => b.billID === billID);
    bill.status = 'Processing';
    const updateObject = {
      billID: bill.billID,
      status: bill.status,
    };

    this.billEvent=this.service.updateBillStatus(updateObject).subscribe(()=>{
      this.nextPage();
    });
  }

  FinishOrder(billID: string) {
    let bill = this.bills.find((b) => b.billID === billID);
    bill.status = 'Done';
    const updateObject = {
      billID: bill.billID,
      status: bill.status,
    };
    this.billEvent=this.service.updateBillStatus(updateObject).subscribe(()=>{
      this.onReset();
    });
  }

  searchBill(){
    this.pageNumber=1;
    this.pageNevigation();
  }

  saveFileDone(){
    const dateFormFormat = formatDate(this.dateForm, 'yyyy-MM-dd', 'en');
    const dateToFormat = formatDate(this.dateTo, 'yyyy-MM-dd', 'en');
    if(dateFormFormat < dateToFormat){
    this.service.saveFileDone(dateFormFormat, dateToFormat).subscribe(data=>{
      const link = document.createElement('a');
      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      saveAs(blob, 'Dach sach hoan thanh.xlsx');
  });
}else{
  this.message='số ngày bắt đầu nhỏ hơn số ngày kết thúc'
}
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
