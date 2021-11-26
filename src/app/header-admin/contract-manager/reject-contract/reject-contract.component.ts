import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
@Component({
  selector: 'app-reject-contract',
  templateUrl: './reject-contract.component.html',
  styleUrls: ['./reject-contract.component.css']
})
export class RejectContractComponent implements OnInit, OnDestroy {


  contractEvent: Subscription = new Subscription();

  contracts: any = [];

  contractFilter: string = '';

  total: number;


  pageSize: number = 8;

  pageNumber: number = 1;

  status: string;

  registerFormId:any;

  ActivateEditPromotion: boolean = false;

  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService,private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.searchContract();
  }

  onReset() {
    this.contractFilter = '';
    this.pageNumber = 1;
    this.pageNevigation();
  }

  ngOnDestroy() {
    this.contractEvent.unsubscribe();
  }

  pageNevigation() {
    this.contractFilter = this.contractFilter || '';
    this.status = 'Reject';
    this.contractEvent = this.service.searchContractPages(this.status, this.contractFilter, this.pageSize, this.pageNumber).subscribe(data => {
      this.total = data.totalCount;
      this.contracts = data.items;
    });
  }


  searchContract() {
    this.pageNumber = 1;
    this.pageNevigation();
  }

  onBack(){
    this.router.navigate(['/header-admin']);
  }

  addClick2(item:any) {
    this.registerFormId=item;
    this.ActivateEditPromotion=true;
  }

  closeClick(){
    this.ActivateEditPromotion=false;
    this.pageNevigation();
  }

}
