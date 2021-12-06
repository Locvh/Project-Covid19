import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-choose-promotion',
  templateUrl: './choose-promotion.component.html',
  styleUrls: ['./choose-promotion.component.css']
})
export class ChoosePromotionComponent implements OnInit,OnDestroy{

  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService, private router: Router,private route: ActivatedRoute, private location: Location) { }


  public promotions: any = [];


  public productOfPromotion: any = [];

  isSubmitted : boolean=false;

  pageSize: number = 3;

  pageNumber: number = 1;

  // total2: number ;

  productEvent :Subscription =new Subscription();

  sellerId:any;

  productId:any;

  message: string;

  @Input() promotionID: any;

  form = new FormGroup({
    productId: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    this.getPromotion();
    this.getProductOfPromotion();

  }

  onSubmit() {
    this.isSubmitted=true;
    var val =  {
      productId:this.form.value.productId,
      promotionId: this.promotionID,
   };
    this.productEvent=this.service.updatePromotionOfProductID(val).subscribe(res => {
      this.message='Đã thêm khuyến mãi cho sản phẩm';
      this.resetForm();
    });
  }

  resetForm(){
    this.form.reset();
    this.form.setValue({
      productId: ''
    });
    this.getPromotion();
    this.getProductOfPromotion();
    this.isSubmitted=false;
    }

    getPromotion(){
      this.sellerId=localStorage.getItem("sellerId");
      this.service.getProductNoPromotion(this.sellerId).subscribe(data => {
        this.promotions = data;
      });
    }

    getProductOfPromotion(){
      this.sellerId=localStorage.getItem("sellerId");
      this.service.getProductOfPromotion(this.sellerId,this.promotionID).subscribe(data => {
        this.productOfPromotion = data;
      });
    }


    deleteProductOfPromotion(item: any){
      var val =  {
        productId:item
     };
     this.productEvent=this.service.deletePromotionOfProductID(val).subscribe(res => {
      this.resetForm();
    });
    }

    ngOnDestroy(){
      this.productEvent.unsubscribe();
    }

    onBack(){
      this.location.back();
    }

}
