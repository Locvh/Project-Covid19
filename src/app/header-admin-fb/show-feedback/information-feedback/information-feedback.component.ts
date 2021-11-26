import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { RegisterForm } from 'src/app/model/registerForm';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { LoadingService } from 'src/app/service/loading.service';
declare var $:any;

@Component({
  selector: 'app-information-feedback',
  templateUrl: './information-feedback.component.html',
  styleUrls: ['./information-feedback.component.css']
})
export class InformationFeedbackComponent implements OnInit , OnDestroy {
  feedbackIdEvent: Subscription = new Subscription();

  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService, private route: ActivatedRoute, private router: Router, private location: Location) { }
  Info: any = [];
  // feedbackId: string;
  registerForm = new RegisterForm();

  @Input() feedbackId: any;
  ngOnInit(): void {
    // this.feedbackId = this.route.snapshot.params["feedbackId"];
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

  ngOnDestroy() {
    this.feedbackIdEvent.unsubscribe();
  }


}
