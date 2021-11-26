import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit ,OnDestroy {

  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService,private service: SharedService,private storage:AngularFireStorage,private route: ActivatedRoute, private router: Router) { }

  form: FormGroup;

  productEvent:Subscription = new Subscription();

  success:string;

  categoryID: string ='';
  // ---------------------------------
  imgSrc : string='https://firebasestorage.googleapis.com/v0/b/marketcovid.appspot.com/o/upload?alt=media&token=24c07f47-c900-43a6-93e7-e0319f923680';

  selectImage : any = null;

  isSubmitted : boolean=false;

  // orderId:string;

  imgInFirebase:string ='https://firebasestorage.googleapis.com/v0/b/marketcovid.appspot.com/o/No%20Image?alt=media&token=bf926f77-6e58-41a8-97e7-75a72856883d';

  selecteCategory: string = '';

  @Input() feedback: any;

  message:string;

  ngOnInit(): void {
    // this.orderId=this.route.snapshot.params["orderId"];
    this.form = new FormGroup({
      imageFeedback: new FormControl('',[Validators.required]),
      descriptionFeedback: new FormControl('',[Validators.required])
    });
  }

  selectChangeHandler (event: any) {

    this.selecteCategory = event.target.value;
  }

  get formControls() {
    return this.form['controls'];
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
    else{
      return this.imgInFirebase='https://firebasestorage.googleapis.com/v0/b/marketcovid.appspot.com/o/No%20Image?alt=media&token=bf926f77-6e58-41a8-97e7-75a72856883d';
    }
  }

  onSubmit() {
    this.isSubmitted=true;

    var val = {
      imageFeedback:this.imgInFirebase,
      description:this.form.value.descriptionFeedback,
      orderId:this.feedback
        };
        if (
          this.form.value.descriptionFeedback != ''
        ) {
    this.productEvent=this.service.addFeedback(val).subscribe(res => {
      this.message="Đã gửi phản hồi thành công"
      this.resetForm();
      this.router.navigate(['/show-view-history']);
    });

    var update = {
      orderId: this.feedback,
      statusOrder:'Complain',
    };
    this.productEvent=this.service.updateBillStatus(update).subscribe(res => {
    });
  }
  }
  ngOnDestroy(){
    this.productEvent.unsubscribe();
  }

  resetForm(){
    this.form.reset();
    this.form.setValue({
      imageFeedback: '',
      descriptionFeedback: '',
      });

      this.imgSrc='https://firebasestorage.googleapis.com/v0/b/marketcovid.appspot.com/o/upload?alt=media&token=24c07f47-c900-43a6-93e7-e0319f923680';
      this.selectImage=null;
      this.isSubmitted=false;
    }

}
