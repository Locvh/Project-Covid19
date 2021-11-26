import { Component, OnInit,OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { InfoProduct } from '../class/info-product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoadingService } from 'src/app/service/loading.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit ,OnDestroy {

  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService,private storage:AngularFireStorage,private route: ActivatedRoute, private location: Location) { }

  InfoProduct = new InfoProduct();


  productEvent:Subscription = new Subscription();

  sellerId:string;

  selecteCategory: string = '';

  nameCategory:string;

  shipId:string;

  message:string;

  form = new FormGroup({
    distanceFee: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.sellerId=localStorage.getItem("sellerId");
    this.getShip(this.sellerId);
  }

  getShip(sellerId2:string): void{
    this.productEvent=this.service.getShipId(sellerId2).subscribe( res => {
      this.shipId=res.shipId;
      this.displayProduct(res);
    });
  }

  displayProduct(data:any): void {
    this.form.patchValue({
      distanceFee: data.distanceFee
    });
  }

  // get formControls() {
  //   return this.form['controls'];
  // }

  onSubmit() {
        var val =  {
          shipId: this.shipId,
          distanceFee: this.form.value.distanceFee
       };
    this.productEvent=this.service.updateShip(val).subscribe(res => {
        this.message="Đã cập nhập phí vận chuyển thành công";
    });
  }


  ngOnDestroy(){
    this.productEvent.unsubscribe();
  }

  onBack(){
    this.location.back();
  }

}
