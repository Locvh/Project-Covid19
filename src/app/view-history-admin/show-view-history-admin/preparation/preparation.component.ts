import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { saveAs } from 'file-saver';
import { LoadingService } from 'src/app/service/loading.service';
import { DatePipe, formatDate } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.css']
})
export class PreparationComponent implements OnInit,OnDestroy {

  billEvent :Subscription=new Subscription();

  bills: any = [];

  selected: any = [];

  messages: any = [];

  billFilter: string ='';

  dateForm: string ='';

  dateTo: string ='';

  total: number ;

  pageSize: number = 8;

  pageNumber: number = 1;

  status:string;

  message:string;

  orderId: any;

  ActivateEditPromotion: boolean = false;

  loading$ = this.loader.loading$;

  message_note: any;
  constructor(public loader: LoadingService,private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.nextPage();
  }

  checked(item){
    if(this.selected.indexOf(item) != -1){
      return true;
    }
  }

  onChange(checked, item){
    if(checked){
    this.selected.push(item);
    } else {
      this.selected.splice(this.selected.indexOf(item), 1)
    }
  }

  save(){
    this.messages.push(this.selected);
    const updateObject = {
      listOrderId: [...this.messages[0]],
      statusOrder: 'Processing',
    };
    this.billEvent=this.service.updateBillStatusList(updateObject).subscribe(()=>{
      this.nextPage();
    });
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
     this.status='New';
     this.billEvent=this.service.searchBillPages(this.status,this.billFilter,this.pageSize,this.pageNumber).subscribe(data => {
      this.total=data.totalCount;
      this.bills = data.items;
        } );
  }

  nextPage() {
    this.router.navigate(['/view-history-admin'], { queryParams: { pageNumber: this.pageNumber} });
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



  saveFilePrepare(){
   const dateFormFormat = formatDate(this.dateForm, 'yyyy-MM-dd', 'en');
   const dateToFormat = formatDate(this.dateTo, 'yyyy-MM-dd', 'en');
    if(dateFormFormat < dateToFormat){
    this.billEvent=this.service.saveFilePrepare(dateFormFormat,dateToFormat).subscribe(data=>{
      const link = document.createElement('a');
      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      saveAs(blob, 'Dach sach cho xu li.xlsx');
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
