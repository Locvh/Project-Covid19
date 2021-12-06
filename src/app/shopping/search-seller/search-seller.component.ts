import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { getProduct } from 'src/app/model/product.model';
declare var $:any;

@Component({
  selector: 'app-search-seller',
  templateUrl: './search-seller.component.html',
  styleUrls: ['./search-seller.component.css']
})
export class SearchSellerComponent implements OnInit,OnDestroy {

  searchEvent :Subscription=new Subscription();

  public sellersTop: any = [];

  public productTop: getProduct[] = [];
  public productTopSales: getProduct[] = [];

  sellerFilter: any;

  status:string;

  location:string;
  currLat: any;
  currLng: any;

  value1:string='Vật dụng gia đình';
  value2:string='Đồ uống';
  value3:string='Vệ sinh nhà cửa';
  value4:string='Chăm sóc cá nhân';
  value5:string='Bánh kẹo';
  value6:string='Sữa';
  value7:string='Gạo, bột, đồ khô';
  value8:string='Rau, củ, trái cây';
  value9:string='Thịt, cá, hải sản';
  value10:string='Gia vị';

  loading$ = this.loader.loading$;

  slides = [{'image': 'assets/img/an toan8.jpg'}, {'image': 'assets/img/an toan 11.jpg'},{'image': 'assets/img/an toan18.jpg'}, {'image': 'assets/img/an toan17.jpg'}];

  constructor(public loader: LoadingService,private service: SharedService,private cartService: CartService) { }
  ngOnInit(): void {
    this.SellerNearby();
    this.getTopProduct();
    this.getTopProductSale();
  }

  ngOnDestroy(){
      this.searchEvent.unsubscribe();
    }

  SellerNearby() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.currLat = position.coords.latitude;
          this.currLng = position.coords.longitude;
          this.location = this.currLat + "," + this.currLng;
          this.searchEvent = this.service.sellerNearBy(this.location).subscribe(data => {
            localStorage.setItem('testObject3', JSON.stringify(data));
            this.sellersTop = data;
          });
          var retrievedObject3 = localStorage.getItem('testObject3');
          this.sellersTop=  JSON.parse(retrievedObject3);
        });
      }
      else {
        alert("Geolocation is not supported by this browser.");
      }

    }

getTopProduct(){
  this.searchEvent = this.service.getTopProduct().subscribe(data => {

    localStorage.setItem('testObject', JSON.stringify(data));
    this.productTop = data;
    this.productTop.forEach((a:any)=>{
      // ,total:a.unitPrice
      Object.assign(a,{quantity:1});
      });
  });

  var retrievedObject = localStorage.getItem('testObject');
  this.productTop =  JSON.parse(retrievedObject);
}


getTopProductSale(){
  this.searchEvent = this.service.getTopProductSales().subscribe(data => {
    localStorage.setItem('testObject2', JSON.stringify(data));
    this.productTopSales = data;
    this.productTopSales.forEach((a:any)=>{
      Object.assign(a,{quantity:1});
      });
  });
  var retrievedObject2 = localStorage.getItem('testObject2');
  this.productTopSales =  JSON.parse(retrievedObject2);
}

addtocart(item : any){
  this.cartService.addtoCart(item);

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
      items: 4
    },
    940: {
      items: 4
    }
  },
  nav: true
}

customOptions2: OwlOptions = {
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
