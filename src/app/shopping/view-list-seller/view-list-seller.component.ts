import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-view-list-seller',
  templateUrl: './view-list-seller.component.html',
  styleUrls: ['./view-list-seller.component.css']
})
export class ViewListSellerComponent implements OnInit ,OnDestroy {

  sellerEvent :Subscription=new Subscription();

  public sellers: any = [];
  public sellersTop: any = [];

  pageSize: number = 20;

  pageNumber: number = 1;

  total: boolean ;

  sellerFilter: string ='';
  origins: string;
  destinations: string;
  vehicle: string;
  api_key: string;

  location: string;
  currLat: any;
  currLng: any;

  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchSeller();
    this.SellerNearby();
  }

  ngOnDestroy(){
    this.sellerEvent.unsubscribe();

  }


  searchSeller() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.currLat = position.coords.latitude;
        this.currLng = position.coords.longitude;
        this.location = this.currLat + "," + this.currLng;
        this.sellerFilter = this.sellerFilter || '';
        this.sellerFilter = this.route.snapshot.params["productName"];
        this.sellerEvent = this.service.searchSellerPages(this.location, this.sellerFilter, this.pageSize, this.pageNumber).subscribe(data => {
          this.total = data.isTopSeller;
          this.sellers = data.items;
        });
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }

  }
  SellerNearby() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.currLat = position.coords.latitude;
        this.currLng = position.coords.longitude;
        this.location = this.currLat + "," + this.currLng;
        this.sellerEvent = this.service.sellerNearBy(this.location).subscribe(data => {
          this.sellersTop = data;
        });
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }

  }

}
