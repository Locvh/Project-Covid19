import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { RegisterForm } from 'src/app/model/registerForm';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { LoadingService } from 'src/app/service/loading.service';
declare var $:any;
@Component({
  selector: 'app-information-prepare',
  templateUrl: './information-prepare.component.html',
  styleUrls: ['./information-prepare.component.css']
})
export class InformationPrepareComponent implements OnInit , OnDestroy {
  registerFormInfoEvent: Subscription = new Subscription();

  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService, private route: ActivatedRoute, private router: Router, private location: Location) { }
  Info: any = [];
  registerForm = new RegisterForm();
  @Input() registerFormId: any;

  message:string;

  ngOnInit(): void {
    this.showContract();

    $(".images img").click(function(){
      $("#full-image").attr("src", $(this).attr("src"));
      $('#image-viewer').show();
    });

    $("#image-viewer .close").click(function(){
      $('#image-viewer').hide();
    });

  }

  showContract(){
    this.registerFormInfoEvent = this.service.getInfoContract(this.registerFormId).subscribe(dataInfo => {
      this.Info = dataInfo;
     });
  }


  rejectContract(registerFormId: string) {
    const updateObject = {
      registerFormId: registerFormId,
      statusContract: 'Reject',
    };
    this.registerFormInfoEvent = this.service.updateContractStatus(updateObject).subscribe(res => {
      this.showContract();
      this.message='Đơn đã bị từ chối';
    });
  }


  finishContract(registerFormId: string) {
    const updateObject = {
      registerFormId: registerFormId,
      statusContract: 'Done',
    };
    this.registerFormInfoEvent = this.service.updateContractStatus(updateObject).subscribe(res => {
      this.showContract();
      this.message='Đơn đã được duyệt';
    });

  }

  ngOnDestroy() {
    this.registerFormInfoEvent.unsubscribe();
  }


}
