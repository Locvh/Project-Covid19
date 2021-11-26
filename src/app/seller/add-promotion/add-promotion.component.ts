import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
import { formatDate, Location } from '@angular/common';
@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit,OnDestroy {
  loading$ = this.loader.loading$;
  constructor( public loader: LoadingService,private service: SharedService, private location: Location) { }

  promotionEvent:Subscription = new Subscription();

  isSubmitted:boolean=false;

  minDate:String;

  message: string;

  @Input() promotion: any;

  form = new FormGroup({
    promotionTitle: new FormControl('' ,Validators.required),
    percentPRO: new FormControl('', [Validators.required,Validators.pattern('^[0-9]*$')]),
    startPromotion: new FormControl('',Validators.required),
    endPromotion: new FormControl('',Validators.required)
  });

  ngOnInit(): void {
    this.minDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.resetForm();

  }

  get formControls(){
    return this.form['controls'];
  }

  onSubmit() {
    this.isSubmitted=true;
    const sellerId=localStorage.getItem("sellerId");
    const dateFormFormat = formatDate(this.form.value.startPromotion, 'yyyy-MM-dd', 'en');
    const dateToFormat = formatDate(this.form.value.endPromotion, 'yyyy-MM-dd', 'en');
    var val = {
      promotionTitle: this.form.value.promotionTitle,
      percentPRO: this.form.value.percentPRO,
      startPromotion: dateFormFormat,
      endPromotion: dateToFormat,
      sellerId:sellerId
        };
      if(this.form.value.percentPRO.length >= 3){
          this.message='Số phần trăm từ 1 đến 99';
      }else if(this.form.value.startPromotion >= this.form.value.endPromotion){
        this.message='Ngày bắt đầu phải nhỏ hơn ngày kết thúc';
      }
      else if(this.form.value.promotionTitle!='' && this.form.value.percentPRO>0 &&this.form.value.percentPRO.length<3 &&this.form.value.startPromotion!='' &&this.form.value.endPromotion!='' && this.form.value.startPromotion < this.form.value.endPromotion){
      this.promotionEvent=this.service.addPromotion(val).subscribe(res => {
        this.message='Thêm khuyến mãi thành công';
        this.resetForm();
    });}

  }

  resetForm(){
    this.form.reset();
    this.form.setValue({
    promotionTitle: '',
    percentPRO: '',
    startPromotion: '',
    endPromotion: '',
    });
    this.isSubmitted=false;
  }

  ngOnDestroy(){
    this.promotionEvent.unsubscribe();
  }

}
