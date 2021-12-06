import { Component, OnInit ,OnDestroy} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';
import { finalize} from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Location } from '@angular/common';
import firebase from 'firebase';
import { WindowService } from 'src/app/service/window.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent implements OnInit,OnDestroy {

  loading$ = this.loader.loading$;
  constructor(
    private service: SharedService,
    private storage: AngularFireStorage,
    private location: Location,
    private win:WindowService,
    private router: Router,
    public loader: LoadingService,
  ) {}


  imgSrc: string = '';
  selectImage : any = null;
  imageCMNDUrlBack: string;
  imageCMNDUrlFont: string;
  imageBusinessLicense: string;
  imageUrlFirebase:string;

  sellerEvent:Subscription = new Subscription();

  windowRef: any;


  verificationCode: string;

  user: any;

  result:string;

  isSubmitted:boolean=false;

  userData: any;

  userDataPhone: any;

  input:any;

  filteredOptions=[];

  locationAddress:string;

  currLat: any;

  currLng: any;

  api_key: string;

  message:string;

  message1:string;

  form = new FormGroup({
    representativePerson: new FormControl('', [Validators.required]),
    brandName: new FormControl('', [Validators.required ]),
    // sellerEmail: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    tradeGenre: new FormControl('', [Validators.required]),
    identityCard: new FormControl('', [Validators.required,Validators.pattern('^[0-9]*$')]),
    imageICF: new FormControl('', [Validators.required]),
    imageICB: new FormControl('', [Validators.required]),
    imageBL: new FormControl('', [Validators.required]),
    verificationCode: new FormControl('',[Validators.required]),
    checkTransport: new FormControl('true', [Validators.required])
  });

  ngOnInit(): void {
    this.firebaseChecking();
    this.resetForm();
  }

  get formControls(){
    return this.form['controls'];
  }


  onSubmit() {
    this.isSubmitted=true;
    var data = JSON.parse(localStorage.getItem('user_data'));
    this.userData = data.user.phoneNumber;
    this.userDataPhone=this.userData.replace('+84','0');
    var val = {
      representativePerson: this.form.value.representativePerson,
      shopName: this.form.value.brandName,
      addressShop: this.form.value.address,
      phoneSeller: this.userDataPhone,
      tradeGenre: this.form.value.tradeGenre,
      identityCard: this.form.value.identityCard,
      imageICB: this.imageCMNDUrlBack,
      imageBL: this.imageBusinessLicense,
      imageICF: this.imageCMNDUrlFont,
      isTransport:this.form.value.checkTransport
    };

    var a1= this.form.value.address;

    if (
      this.form.value.representativePerson != '' &&
      this.form.value.brandName != '' &&
      this.form.value.identityCard > 0 &&
      this.form.value.address != ''&&
      this.form.value.tradeGenre != ''&&
      this.imageCMNDUrlBack != ''&&
      this.imageBusinessLicense != ''&&
      this.imageCMNDUrlFont != ''
    ) {
  if(a1.substr(a1.length - 19)=='Quận 1, Hồ Chí Minh'){
    this.sellerEvent=this.service.addContract(val).subscribe(res => {
      localStorage.removeItem("_grecaptcha");
      localStorage.removeItem("user_data");
      localStorage.removeItem("verificationId");
      this.router.navigate(['/success-registration']);
    },
    (error) => {
      this.message=error.error;
    }
    );
  }
  else{
    this.message1='Thành thật xin lỗi chúng tôi chỉ phục vụ cho tiểu thương quận 1';
  }

}

  }


  ngOnDestroy(){
    this.sellerEvent.unsubscribe();
  }

  firebaseChecking(){
    this.windowRef = this.win.windowRef;
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebaseConfig);
   }else {
      firebase.app();
   }

    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container'
    );

    this.windowRef.recaptchaVerifier.render().then(widgetId => {
      this.windowRef.recaptchaWidgetId = widgetId;
    });
  }

  showPreviewBL(event: any) {
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
            this.imageBusinessLicense=url;
            return this.imageBusinessLicense;
          })
        })
      ).subscribe();

    }
   }

  showPreviewICF(event: any) {
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
            this.imageCMNDUrlFont=url;
            return this.imageCMNDUrlFont;
          })
        })
      ).subscribe();

    }
   }

  showPreviewICB(event: any) {
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
            this.imageCMNDUrlBack=url;
            return this.imageCMNDUrlBack;
          })
        })
      ).subscribe();
    }
   }

   autocomplete(){
    this.api_key='iQ4vLSVlXfaD59TdSeRfHp1fXDIhpEJqVJDPKThn';
    this.currLat = 10.772482708117636;
    this.currLng = 106.69890791265118;
    this.locationAddress = this.currLat + "," + this.currLng;
    this.input=this.form.value.address;

    this.service.autocomplete(this.api_key,this.locationAddress,this.input).subscribe(data => {
      this.filteredOptions=data.predictions;
    });
}

   resetForm() {
    this.form.reset();
    this.form.setValue({
      representativePerson: '',
      brandName: '',
      phoneNumber: '',
      sellerEmail: '',
      address: '',
      tradeGenre: '',
      identityCard: '',
      imageICF: '',
      imageICB: '',
      imageBL: ''
    });
    this.isSubmitted=false;

  }

  onBack(){
    this.location.back();
  }


}
