import { Component,OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { BehaviorSubject} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UI-Covid19';

  // isLogin=this.checklogin.getLogoutStatus;

// private checklogin:LoginService
  constructor() { }

  // isLogin: boolean;



  ngOnInit(): void {
  //   this.checklogin.getLogoutStatus.subscribe((data) => {
  //     console.log(data);
  //  });

  }

}
