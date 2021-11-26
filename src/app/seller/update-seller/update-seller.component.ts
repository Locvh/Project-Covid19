import { Component, OnInit ,OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
import { Location } from '@angular/common';
import { Seller } from 'src/app/model/seller';
@Component({
  selector: 'app-update-seller',
  templateUrl: './update-seller.component.html',
  styleUrls: ['./update-seller.component.css']
})
export class UpdateSellerComponent implements OnInit ,OnDestroy {
  loading$ = this.loader.loading$;

  seller: Seller;

  constructor(public loader: LoadingService,private service: SharedService,private storage:AngularFireStorage, private router: Router, private location: Location) { }

  sellerEvent:Subscription = new Subscription();

  success:string;
  // ---------------------------------
  imgSrc : string;

  selectImage : any = null;

  isSubmitted : boolean;

  imgInFirebase:string;

  sellerId:string;

  input:any;

  filteredOptions=[];

  locationAddress:string;

  currLat: any;

  currLng: any;

  api_key: string;

  message:string;


  form = new FormGroup({
    phoneSeller: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    shopName: new FormControl('', [Validators.required]),
    addressShop: new FormControl('', [Validators.required]),
  });


  ngOnInit(): void {
    this.sellerId=localStorage.getItem("sellerId");
    this.getSeller(this.sellerId);

  }


  getSeller(SellerId:string):void{
    this.sellerEvent=this.service.getInfoSeller(SellerId).subscribe( (res:any )=> {
      this.imgSrc=res.imageSeller;
     this.displaySeller(res)
    });
  }

  displaySeller(data:any): void {
    this.form.patchValue({
      phoneSeller: data.phoneSeller,
      email: data.email,
      shopName: data.shopName,
      addressShop: data.addressShop
    });
  }


  showPreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload= (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL( event.target.files[0]);
      this.selectImage=  event.target.files[0];
      var filePath =`${this.selectImage.name.split('.').slice(0,-1).join('.')}`;
      const fileRef= this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectImage).snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe((url)=>{
            this.imgInFirebase=url;
            return this.imgInFirebase;
          })
        })
      ).subscribe();
    }

  }

  updateData() {
        var val =  {
          sellerId:this.sellerId,
          shopName: this.form.value.shopName,
          email: this.form.value.email,
          phoneSeller:this.form.value.phoneSeller,
          addressShop:this.form.value.addressShop,
          imageSeller:this.imgInFirebase,
       };
       var a1= this.form.value.addressShop;
       if(a1.substr(a1.length - 19)=='Quận 1, Hồ Chí Minh'){
    this.sellerEvent=this.service.updateSeller(val).subscribe(res => {
      this.message="Đã cập nhập thông tin tiểu thương thành công";
    });
  }else{
    this.message='Bạn nên cập nhập lại tiểu thương ở quận 1';
  }
  }

  autocomplete(){
    this.api_key='iQ4vLSVlXfaD59TdSeRfHp1fXDIhpEJqVJDPKThn';
    this.currLat = 10.772482708117636;
    this.currLng = 106.69890791265118;
    this.locationAddress = this.currLat + "," + this.currLng;
    this.input=this.form.value.addressShop;
    this.service.autocomplete(this.api_key,this.locationAddress,this.input).subscribe(data => {
      this.filteredOptions=data.predictions;
    })
}

  ngOnDestroy(){
    this.sellerEvent.unsubscribe();
  }

  onBack(){
    this.location.back();
  }
}

