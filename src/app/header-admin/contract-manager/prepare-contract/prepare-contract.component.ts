import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
@Component({
  selector: 'app-prepare-contract',
  templateUrl: './prepare-contract.component.html',
  styleUrls: ['./prepare-contract.component.css']
})
export class PrepareContractComponent implements OnInit, OnDestroy  {

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
   this.onReset();
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
    this.status = 'New';
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

  // finishContract(registerFormId: string) {
  //   const updateObject = {
  //     registerFormId: registerFormId,
  //     statusContract: 'Done',
  //   };
  //   this.contractEvent = this.service.updateContractStatus(updateObject).subscribe(res => {
  //     this.ActivateEditPromotion=false;
  //     this.pageNevigation();
  //   });

  // }

  // rejectContract(registerFormId: string) {
  //   const updateObject = {
  //     registerFormId: registerFormId,
  //     statusContract: 'Reject',
  //   };
  //   this.contractEvent = this.service.updateContractStatus(updateObject).subscribe(res => {
  //     this.ActivateEditPromotion=false;
  //     this.pageNevigation();
  //   });
  // }

  addClick2(item:any) {
    this.registerFormId=item;
    this.ActivateEditPromotion=true;
  }

  closeClick(){
    this.ActivateEditPromotion=false;
    this.pageNevigation();
  }


}
