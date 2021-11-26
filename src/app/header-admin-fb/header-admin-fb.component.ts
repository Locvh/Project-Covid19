import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
declare var $:any;
@Component({
  selector: 'app-header-admin-fb',
  templateUrl: './header-admin-fb.component.html',
  styleUrls: ['./header-admin-fb.component.css']
})
export class HeaderAdminFBComponent implements OnInit {

  constructor(private checklogin:LoginService) { }


  ngOnInit(): void {
  }

  logOut(){
    this.checklogin.logOut();
  }


}
