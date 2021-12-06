import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
// import { Location } from '@angular/common';
// declare var $:any;


@Component({
  selector: 'app-show-promotion',
  templateUrl: './show-promotion.component.html',
  styleUrls: ['./show-promotion.component.css']
})
export class ShowPromotionComponent implements OnInit,OnDestroy{

  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService, private router: Router) { }

  public promotions: any = [];

  isSubmitted : boolean=false;

  pageSize: number = 8;

  pageNumber: number = 1;

  total: number ;

  productEvent :Subscription =new Subscription();

  sellerId:any;

  ModalTitle: string | undefined ;

  ModalTitle2: string | undefined ;

  ActivateAddEditDepComp: boolean = false;

  promotion: any;

  promotionID:any;


  ngOnInit(): void {
    this.pageNevigation();
  }


    pageNevigation(){
      this.sellerId=localStorage.getItem("sellerId");
      this.productEvent=this.service.getPromotionPage(this.sellerId,this.pageSize,this.pageNumber).subscribe(data => {
        this.total=data.totalCount;
        this.promotions = data.items;
        });
    }

    // nextPage(){
    //   this.router.navigate(['/show-promotion'], { queryParams: { pageNumber: this.pageNumber} });
    //   this.pageNevigation();
    // }

    ngOnDestroy(){
      this.productEvent.unsubscribe();
    }


    addClick() {
      this.promotion = {
        promotionTitle:"",
        percentPRO: "",
        startPromotion: "",
        endPromotion:""
      }
      this.ActivateAddEditDepComp=true;
    }

    EditClick(item:any) {
      this.promotionID=item;
      this.ActivateAddEditDepComp=true;
    }

    chooseProduct(item:any) {
      this.promotionID=item;
      this.ActivateAddEditDepComp=true;
    }

    closeClick(){
      this.ActivateAddEditDepComp=false;
      this.pageNevigation();
    }
}
