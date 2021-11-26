import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-finish-contract',
  templateUrl: './finish-contract.component.html',
  styleUrls: ['./finish-contract.component.css']
})
export class FinishContractComponent implements OnInit,OnDestroy  {


  registerFormEvent: Subscription = new Subscription();

  registerForms: any = [];

  registerFormFilter: string = '';

  total: number;

  pageSize: number = 8;

  pageNumber: number = 1;

  status: string;

  registerFormId:any;

  ActivateEditPromotion: boolean = false;

  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService,private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.nextPage();
  }

  onReset() {
    this.registerFormFilter = '';
    this.pageNumber = 1;
    this.pageNevigation();
  }

  ngOnDestroy() {
    this.registerFormEvent.unsubscribe();
  }

  pageNevigation() {
    this.registerFormFilter = this.registerFormFilter || '';
    this.status = 'Done';
    this.registerFormEvent = this.service.searchContractPages(this.status, this.registerFormFilter, this.pageSize, this.pageNumber).subscribe(data => {
      this.total = data.totalCount;
      this.registerForms = data.items;
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

  updateIsTransportContract(item:string,isAvaible:boolean){
    const updateObject = {
      registerFormId :  item,
      isTransport : isAvaible
     }

     this.registerFormEvent=this.service.updateTransport(updateObject).subscribe(res=>{
      //  console.log(res);
      localStorage.setItem('jwt',res);
            this.nextPage();
    },
    (error) => console.error(error)
    );
  }

  nextPage() {
    this.router.navigate(['/contract-manager'], { queryParams: { pageNumber: this.pageNumber} });
    this.pageNevigation();
  }

  // updateIsAvaiableProduct(item:string,isAvaible:boolean){
  //   const updateObject = {
  //       productId: item,
  //       isAvaible : isAvaible
  //       };
  //     this.productEvent=this.service.updateIsAvaiableProduct(updateObject).subscribe(res=>{
  //       this.nextPage();
  //     },
  //     (error) => console.error(error)
  //     );
  // }

}
