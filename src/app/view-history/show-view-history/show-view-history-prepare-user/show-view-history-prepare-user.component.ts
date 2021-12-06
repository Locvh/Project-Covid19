import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
@Component({
  selector: 'app-show-view-history-prepare-user',
  templateUrl: './show-view-history-prepare-user.component.html',
  styleUrls: ['./show-view-history-prepare-user.component.css']
})
export class ShowViewHistoryPrepareUserComponent implements OnInit ,OnDestroy {

    billEvent :Subscription=new Subscription();

    bills: any = [];

    pageSize: number = 18;

    pageNumber: number = 1;

    total: number ;


    phoneSearch: string ='';

    searchName: string ='';

    userData: any;

    userDataPhone: any;

    statusOder: any;

    orderId: any;

    ActivateEditPromotion: boolean = false;

    loading$ = this.loader.loading$;
    constructor(public loader: LoadingService,private service: SharedService ,private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      this.pageNevigation()

    }

    ngOnDestroy(){
      this.billEvent.unsubscribe();

    }

    pageNevigation(){
      this.searchName=this.searchName||'';
      this.userDataPhone= JSON.parse(localStorage.getItem('phoneCheck'));
      this.statusOder='New';
      this.billEvent=this.service.searchBillPagesPhone(this.statusOder,this.userDataPhone,this.searchName,this.pageSize,this.pageNumber).subscribe(data => {
        console.log(data);
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

    CancelOrder(orderId: string) {
      const updateObject = {
        orderId: orderId,
        statusOrder: 'Cancel',
      };
      this.billEvent=this.service.updateBillStatus(updateObject).subscribe((data)=>{
        alert(data.toString());
        this.searchBill();
      });
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
