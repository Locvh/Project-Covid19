import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { InfoProduct } from '../class/info-product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { formatDate, Location } from '@angular/common';
import { LoadingService } from 'src/app/service/loading.service';
@Component({
  selector: 'app-update-promotion',
  templateUrl: './update-promotion.component.html',
  styleUrls: ['./update-promotion.component.css']
})
export class UpdatePromotionComponent implements OnInit  ,OnDestroy {

  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService,private storage:AngularFireStorage,private route: ActivatedRoute, private location: Location) { }
  productEvent:Subscription = new Subscription();

  success:string;

  imgInFirebase:string ;

  promotionId:string;

  nameCategory:string;

  minDate:string;

  message: string;

  @Input()  promotionID: any;


  form = new FormGroup({
    promotionTitle: new FormControl('', [Validators.required]),
    percentPRO: new FormControl('', [Validators.required]),
    startPromotion: new FormControl('', [Validators.required]),
    endPromotion: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.getPromotion(this.promotionID);
  }

  getPromotion(promotionId:string):void{
    this.productEvent=this.service.getPromotionId(promotionId).subscribe( res => {
      this.displayPromotion(res);
    });
  }

  displayPromotion(data:any): void {
    this.form.patchValue({
      promotionTitle: data.promotionTitle,
      percentPRO: data.percentPRO,
      startPromotion: data.startPromotion,
      endPromotion: data.endPromotion
    });
  }


  onSubmit() {
    const dateFormFormat = formatDate(this.form.value.startPromotion, 'yyyy-MM-dd', 'en');
    const dateToFormat = formatDate(this.form.value.endPromotion, 'yyyy-MM-dd', 'en');
      var val =  {
          promotionId:this.promotionID,
          promotionTitle: this.form.value.promotionTitle,
          percentPRO: this.form.value.percentPRO,
          startPromotion:dateFormFormat ,
          endPromotion: dateToFormat
      };
    if(this.form.value.percentPRO.length >= 3){
        this.message='Số phần trăm từ 1 đến 99';
    }else if(this.form.value.startPromotion >= this.form.value.endPromotion){
        this.message='Ngày bắt đầu phải nhỏ hơn ngày kết thúc';
    }
    else if(this.form.value.promotionTitle!='' && this.form.value.percentPRO>0 && this.form.value.startPromotion!='' &&this.form.value.endPromotion!=''){
    this.productEvent=this.service.updatePromotion(val).subscribe(res => {
        this.message='Cập nhập khuyến mãi thành công';
    });
  }

  }


  ngOnDestroy(){
    this.productEvent.unsubscribe();
  }

  onBack(){
    this.location.back();
  }

}
