import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { RegisterForm } from 'src/app/model/registerForm';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { LoadingService } from 'src/app/service/loading.service';
declare var $:any;
@Component({
  selector: 'app-information-processed-feedback',
  templateUrl: './information-processed-feedback.component.html',
  styleUrls: ['./information-processed-feedback.component.css']
})
export class InformationProcessedFeedbackComponent implements OnInit , OnDestroy {
  feedbackIdEvent: Subscription = new Subscription();

  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService, private route: ActivatedRoute, private router: Router, private location: Location) { }
  Info: any = [];
  // feedbackId: string;
  registerForm = new RegisterForm();

  @Input() feedbackId: any;

  message:string;
  ngOnInit(): void {
    this.showFeedback();

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


  finishFeedback(feedbackId: string,orderId:string) {
    const updateObject = {
      feedbackId: feedbackId,
      status: 'Done',
    };
    this.feedbackIdEvent = this.service.updateFeedbackStatus(updateObject).subscribe(res => {
      this.showFeedback();
      this.message="Đã giải quyết phản hồi";
    });
    var update = {
      orderId: orderId,
      statusOrder:'Done',
    };
    this.feedbackIdEvent=this.service.updateBillStatus(update).subscribe(res => {
    });

  }

  ngOnDestroy() {
    this.feedbackIdEvent.unsubscribe();
  }


}
