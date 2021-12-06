import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { RegisterForm } from 'src/app/model/registerForm';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { LoadingService } from 'src/app/service/loading.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-infomation-prepare-feedback',
  templateUrl: './infomation-prepare-feedback.component.html',
  styleUrls: ['./infomation-prepare-feedback.component.css']
})
export class InfomationPrepareFeedbackComponent implements OnInit, OnDestroy {
  feedbackIdEvent: Subscription = new Subscription();
  form: FormGroup;
  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService, private route: ActivatedRoute, private router: Router, private location: Location) { }
  Info: any = [];
  registerForm = new RegisterForm();

  @Input() feedbackId: any;

  message:string;

  ngOnInit(): void {
    this.showFeedback();
    this.form = new FormGroup({
      descriptionAdmin: new FormControl('',[Validators.required])
    });
    $(".images img").click(function(){
      $("#full-image").attr("src", $(this).attr("src"));
      $('#image-viewer').show();
    });

    $("#image-viewer .close").click(function(){
      $('#image-viewer').hide();
    });
  }

  showFeedback(){
    this.feedbackIdEvent = this.service.getFeedbackID(this.feedbackId).subscribe(dataInfo => {
      this.Info = dataInfo;
     });
  }


  rejectFeedback(feedbackId: string,orderId:string) {
    const updateObject = {
      feedbackId: feedbackId,
      descriptionAdmin:this.form.value.descriptionAdmin,
      status: 'Reject',
    };
    this.feedbackIdEvent = this.service.updateFeedbackStatus(updateObject).subscribe(res => {
      this.showFeedback();
      this.message="Từ chối phản hồi của khách hàng";
    });

    var update = {
      orderId: orderId,
      descriptionAdmin:this.form.value.descriptionAdmin,
      statusOrder:'Finish',
    };
    this.feedbackIdEvent=this.service.updateBillStatus(update).subscribe(res => {
    });
  }


  processFeedback(feedbackId: string) {
    const updateObject = {
      feedbackId: feedbackId,
      descriptionAdmin:this.form.value.descriptionAdmin,
      status: 'Processing',
    };
    this.feedbackIdEvent = this.service.updateFeedbackStatus(updateObject).subscribe(res => {
      this.showFeedback();
      this.message="Đã gửi phản hồi đến cho tiểu thương";
    });
  }

  ngOnDestroy() {
    this.feedbackIdEvent.unsubscribe();
  }


}
