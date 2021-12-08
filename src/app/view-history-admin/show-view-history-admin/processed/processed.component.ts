import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { saveAs } from 'file-saver';
import { LoadingService } from 'src/app/service/loading.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-processed',
  templateUrl: './processed.component.html',
  styleUrls: ['./processed.component.css']
})
export class ProcessedComponent implements OnInit,OnDestroy {

  billEvent :Subscription=new Subscription();

  bills: any = [];

  selected: any = [];

  maxDate =new Date();

  messages: any = [];

  billFilter: string ='';

  total: number ;

  dateForm: string ='';
  dateTo: string ='';


  pageSize: number = 8;

  pageNumber: number = 1;

  status:string;

  loading$ = this.loader.loading$;

  orderId: any;

  ActivateEditPromotion: boolean = false;

  message:string;
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
      statusOrder: 'Done',
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

  nextPage() {
    this.router.navigate(['/view-history-admin'], { queryParams: { pageNumber: this.pageNumber} });
    this.pageNevigation();
  }

  pageNevigation(){
    this.billFilter=this.billFilter||'';
    this.status='Processing';
    this.billEvent=this.service.searchBillPages(this.status,this.billFilter,this.pageSize,this.pageNumber).subscribe(data => {
      this.total=data.totalCount;
      this.bills = data.items;
        } );
  }


  FinishOrder(orderId: string) {
    const updateObject = {
      orderId: orderId,
      statusOrder:'Done',
    };
    this.billEvent=this.service.updateBillStatus(updateObject).subscribe(()=>{
      // this.onReset();
      this.nextPage();
    });
  }

  searchBill(){
    this.pageNumber=1;
    this.pageNevigation();
  }


  saveFileProcess(){
    const dateFormFormat = formatDate(this.dateForm, 'yyyy-MM-dd', 'en');
    const dateToFormat = formatDate(this.dateTo, 'yyyy-MM-dd', 'en');
    if(dateFormFormat < dateToFormat){
    this.billEvent= this.service.saveFileProcess(dateFormFormat,dateToFormat).subscribe(data=>{
      const link = document.createElement('a');
      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      saveAs(blob, 'Dach sach dang xu li.xlsx');
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
