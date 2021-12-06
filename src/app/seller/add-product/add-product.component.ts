import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { InfoProduct } from '../class/info-product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit, OnDestroy {
  loading$ = this.loader.loading$;
  constructor(
    public loader: LoadingService,
    private service: SharedService,
    private storage: AngularFireStorage,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  InfoProduct = new InfoProduct();

  productEvent: Subscription = new Subscription();

  success: string;

  message: string;

  // ---------------------------------
  imgSrc: string = 'https://firebasestorage.googleapis.com/v0/b/marketcovid.appspot.com/o/upload?alt=media&token=24c07f47-c900-43a6-93e7-e0319f923680';

  selectImage: any;

  isSubmitted: boolean = false;

  imgInFirebase: string = 'https://firebasestorage.googleapis.com/v0/b/marketcovid.appspot.com/o/No%20Image?alt=media&token=bf926f77-6e58-41a8-97e7-75a72856883d';


  @Input() product: any;

  form = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    unitPrice: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    unitProduct: new FormControl('', [Validators.required]),
    imageProduct: new FormControl(''),
    descriptionProduct: new FormControl(''),
    categoryProduct: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.resetForm();
  }

  get formControls() {
    return this.form['controls'];
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectImage = event.target.files[0];
      var filePath = `${this.selectImage.name
        .split('.')
        .slice(0, -1)
        .join('.')}`;
      const fileRef = this.storage.ref(filePath);
      this.storage
        .upload(filePath, this.selectImage)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.imgInFirebase = url;
              return this.imgInFirebase;
            });
          })
        )
        .subscribe();
    } else {
      return (this.imgInFirebase =
        'https://firebasestorage.googleapis.com/v0/b/marketcovid.appspot.com/o/No%20Image?alt=media&token=bf926f77-6e58-41a8-97e7-75a72856883d');
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    const sellerId = localStorage.getItem('sellerId');
    var val = {
      productName: this.form.value.productName,
      unitPrice: this.form.value.unitPrice,
      unitProduct: this.form.value.unitProduct,
      imageProduct: this.imgInFirebase,
      descriptionProduct: this.form.value.descriptionProduct,
      sellerId: sellerId,
      categoryId: this.form.value.categoryProduct,
    };
    if (
      this.form.value.productName != '' &&
      this.form.value.unitPrice > 0 &&
      this.form.value.unitProduct != '' &&
      this.form.value.categoryProduct != ''
    ) {
      this.productEvent = this.service.addProduct(val).subscribe((res) => {
        this.message='Đã thêm sản phẩm';
        this.resetForm();
      },
      (error) => {
        this.message=error.error;
      }
      );
    }
  }
  ngOnDestroy() {
    this.productEvent.unsubscribe();
  }
  resetForm() {
    this.form.reset();
    this.form.setValue({
      productName: '',
      unitPrice: '',
      unitProduct: '',
      imageProduct: '',
      descriptionProduct: '',
      categoryProduct: '',
    });

    this.imgSrc =
      'https://firebasestorage.googleapis.com/v0/b/marketcovid.appspot.com/o/upload?alt=media&token=24c07f47-c900-43a6-93e7-e0319f923680';
    this.selectImage = null;
    this.isSubmitted = false;
  }

  onBack() {
    this.location.back();
  }
}
