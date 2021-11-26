import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { InfoProduct } from '../class/info-product';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoadingService } from 'src/app/service/loading.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit ,OnDestroy {

  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService,private storage:AngularFireStorage,private route: ActivatedRoute, private location: Location) { }

  InfoProduct = new InfoProduct();

  @Input()  productID: any;

  productEvent:Subscription = new Subscription();

  success:string;

  imgSrc : string;

  selectImage : any = null;

  isSubmitted : boolean;

  imgInFirebase:string ;

  productId:string;

  selecteCategory: string = '';

  nameCategory:string;

  message:string;

  form = new FormGroup({
    imageProduct: new FormControl('', [Validators.required]),
    productName: new FormControl('', [Validators.required]),
    unitPrice: new FormControl('', [Validators.required]),
    unitProduct: new FormControl('', [Validators.required]),
    descriptionProduct: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.getProduct(this.productID);
  }

  getProduct(productId:string):void{
    this.productEvent=this.service.getProductId(productId).subscribe( res => {
      this.imgSrc=res.imageProduct;
      this.displayProduct(res);

    });
  }

  displayProduct(data:any): void {
    this.form.patchValue({
      productName: data.productName,
      unitPrice: data.unitPrice,
      unitProduct: data.unitProduct,
      descriptionProduct: data.descriptionProduct,
      categoryId: data.categoryId
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


  onSubmit() {
        var val =  {
          productId:this.productID,
          productName: this.form.value.productName,
          unitPrice: this.form.value.unitPrice,
          unitProduct:this.form.value.unitProduct,
          imageProduct:this.imgInFirebase,
          descriptionProduct:this.form.value.descriptionProduct,
          categoryId:this.form.value.categoryId
       };
    this.productEvent=this.service.updateProduct(val).subscribe(res => {
      this.message="Cập nhập sản phẩm thành công";
    });
  }


  ngOnDestroy(){
    this.productEvent.unsubscribe();
  }

}
