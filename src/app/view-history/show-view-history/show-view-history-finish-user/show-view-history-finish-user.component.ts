import { formatDate } from '@angular/common';
import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
@Component({
  selector: 'app-show-view-history-finish-user',
  templateUrl: './show-view-history-finish-user.component.html',
  styleUrls: ['./show-view-history-finish-user.component.css']
})
export class ShowViewHistoryFinishUserComponent implements OnInit ,OnDestroy {

  billEvent :Subscription=new Subscription();

  bills: any = [];

  pageSize: number = 18;

  pageNumber: number = 1;

  total: number ;


  phoneSearch: string ='';

  searchName: string ='';

  status:string;

  limitDateBuy: number;

  monthBuy: number;

  yearBuy: number;

  dayNow: number;

  monthNow: number;

  yearNow: number;

  dayNext: number;

  monthNext: number;

  userData: any;

  userDataPhone: any;

  statusOder: any;

  loading$ = this.loader.loading$;


  ActivateEditPromotion: boolean = false;

  feedback: any;

  orderId: any;

  // orderId:string;

  constructor(public loader: LoadingService,private service: SharedService ,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pageNevigation()

  }

  ngOnDestroy(){
    this.billEvent.unsubscribe();

  }

  pageNevigation(){
    this.searchName=this.searchName||'';
    // var data = JSON.parse(localStorage.getItem('user_data'));
    // this.userData = data.user.phoneNumber;
    // this.userDataPhone=this.userData.replace('+84','0');
    this.userDataPhone= JSON.parse(localStorage.getItem('phoneCheck'));
    this.statusOder='Done';
    this.billEvent=this.service.searchBillPagesPhone(this.statusOder,this.userDataPhone,this.searchName,this.pageSize,this.pageNumber).subscribe(data => {
      this.total=data.totalCount;
      this.bills = data.items;
    } );
  }

  onReset(){
    this.searchName='';
    this.pageNumber=1;
    this.pageNevigation();
  }

  searchBill(){
    this.pageNumber=1;
    this.pageNevigation();
  }

  logOut(){
    localStorage.removeItem("_grecaptcha");
    localStorage.removeItem("user_data");
    localStorage.removeItem("verificationId");
    localStorage.removeItem("phoneCheck");
    this.router.navigate(['/shopping']);
  }



  LimitDate(date: any) {
    var dateNow = formatDate(new Date(), 'dd/MM/yyyy', 'en');

    this.dayNow = parseInt(dateNow.split('/')[0]);

    this.monthNow = parseInt(dateNow.split('/')[1]);

    this.yearNow = parseInt(dateNow.split('/')[2]);

    var tmp = date.split('/');

    this.limitDateBuy = parseInt(tmp[0]) + 3;

    this.monthBuy = parseInt(tmp[1]);

    this.yearBuy = parseInt(tmp[2]);

    if (this.yearBuy < this.yearNow) {
      this.monthNext = this.monthNow + 12;
      if (this.monthBuy < this.monthNext) {
        this.dayNext = this.dayNow + 31;
        if (this.limitDateBuy < this.dayNext) {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.limitDateBuy < this.dayNow) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      if (this.monthBuy < this.monthNow) {
        this.dayNext = this.dayNow + 31;
        if (this.limitDateBuy < this.dayNext) {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.limitDateBuy < this.dayNow) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  addClick(item:any) {
    console.log()
    this.feedback=item;
    this.ActivateEditPromotion=true;
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
