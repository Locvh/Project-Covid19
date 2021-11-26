
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-show-view-history',
  templateUrl: './show-view-history.component.html',
  styleUrls: ['./show-view-history.component.css']
})

export class ShowViewHistoryComponent implements OnInit{
  userData: any;

  userDataPhone: any;
  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService) { }

  isCheck: any = {
    prepare: false,
    processing: false,
    finish: false,
    cancel: false,
    complain: false,
    open:true
  };

  ngOnInit(): void {
    var data = JSON.parse(localStorage.getItem('user_data'));
    if(data!=null){
    this.userData = data.user.phoneNumber;
    this.userDataPhone=this.userData.replace('+84','0');
    localStorage.setItem('phoneCheck',JSON.stringify(this.userDataPhone));
     }
  }

  showProcess(processName: string) {
    Object.keys(this.isCheck).forEach((key) => {
      key === processName
        ? (this.isCheck[key] = true)
        : (this.isCheck[key] = false);
    });

  }

}
