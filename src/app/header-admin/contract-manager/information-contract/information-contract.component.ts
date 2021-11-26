import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
declare var $:any;
@Component({
  selector: 'app-information-contract',
  templateUrl: './information-contract.component.html',
  styleUrls: ['./information-contract.component.css']
})
export class InformationContractComponent implements OnInit ,OnDestroy {

  registerFormInfoEvent :Subscription=new Subscription();

  Info: any = [];
  @Input() registerFormId: any;
  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService,private service: SharedService,private route: ActivatedRoute) { }

  // registerFormId: string ;

  ngOnInit(): void {
    // this.registerFormId=this.route.snapshot.params["registerFormId"];
    this.registerFormInfoEvent=this.service.getInfoContract(this.registerFormId).subscribe(dataInfo=>{
      this.Info = dataInfo;
    });

    $(".images img").click(function(){
      $("#full-image").attr("src", $(this).attr("src"));
      $('#image-viewer').show();
    });

    $("#image-viewer .close").click(function(){
      $('#image-viewer').hide();
    });
  }

  ngOnDestroy(){
    this.registerFormInfoEvent.unsubscribe();
  }

}
