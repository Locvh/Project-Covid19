import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { getProduct } from 'src/app/model/product.model';
@Component({
  selector: 'app-show-shopping-detail',
  templateUrl: './show-shopping-detail.component.html',
  styleUrls: ['./show-shopping-detail.component.css']
})
export class ShowShoppingDetailComponent implements OnInit,OnDestroy  {

  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService,private service: SharedService,private route: ActivatedRoute,private cartService: CartService) { }

  productEvent:Subscription = new Subscription();

  productId:string;

  product = new getProduct;

  ngOnInit(): void {
    this.productId=this.route.snapshot.params["productId"];
    this.productEvent=this.service.getProductId(this.productId).subscribe(res=> {
      this.product=res;
    });
}

addtocart(){
  this.cartService.addtoCart(this.product);

}


  ngOnDestroy(){
    this.productEvent.unsubscribe();
  }


customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}
}
