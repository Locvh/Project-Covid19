import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/service/shared.service';
import { CartService } from 'src/app/service/cart.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
import { getProduct } from 'src/app/model/product.model';
@Component({
  selector: 'app-show-shoping',
  templateUrl: './show-shoping.component.html',
  styleUrls: ['./show-shoping.component.css'],
})
export class ShowShopingComponent implements OnInit,OnDestroy {

  public products: getProduct[] = [];


  productNameFilter:string="";

  productEvent :Subscription =new Subscription();

  pageSize: number = 24;

  pageNumber: number = 1;

  total: number ;

  sellerId: string;

  loading$ = this.loader.loading$;

  shopName: string;

  shopPhone: string;

  shopAddress: string;

  image: string;


  constructor(public loader: LoadingService,private service: SharedService,private route: ActivatedRoute,private cartService: CartService) {}

  ngOnInit(): void {
   this.pageNevigation();
   this.GetNotifySeller();
  }


   onReset(){
     this.productNameFilter='';
     this.pageNumber=1;
     this.pageNevigation();
    }



  pageNevigation(){
    this.sellerId = this.route.snapshot.params["sellerId"];
      this.productNameFilter=this.productNameFilter||'';
      this.productEvent = this.service.searchProductbySellerID(this.productNameFilter,this.sellerId, this.pageSize, this.pageNumber).subscribe(data => {
      this.total = data["totalCount"];
      this.products = data["items"];
      this.products.forEach((a:any)=>{
        // total:a.unitPrice
      Object.assign(a,{quantity:1});
      });
      },
      (error) => console.error(error));

  }


  GetNotifySeller(){
    this.sellerId = this.route.snapshot.params["sellerId"];
    this.productEvent=this.service.getInfoSeller(this.sellerId).subscribe( res => {
    this.shopName=res.shopName;
    this.shopPhone=res.phoneSeller;
    this.shopAddress=res.addressShop;
    this.image=res.imageSeller;
    });
  }


  ngOnDestroy(){
    this.productEvent.unsubscribe();
  }

  addtocart(item : any){
    this.cartService.addtoCart(item);

  }

  searchProduct(){
    this.pageNumber=1;
    this.pageNevigation();
  }


}
