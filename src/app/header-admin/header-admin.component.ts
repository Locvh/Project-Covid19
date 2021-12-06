import { Component, OnInit,OnDestroy, Injectable } from '@angular/core';
import { SharedService } from '../service/shared.service';
import {saveAs as importedSaveAs} from "file-saver";
import { Subscription } from 'rxjs';
declare var $:any;
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable()
@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit,OnDestroy {

  ExcelFileName: string | undefined;

  message: string | undefined ;

  fileName:string;

  productEvent :Subscription =new Subscription();

  constructor(private service: SharedService, private router: Router,private checklogin:LoginService) { }

  ngOnInit(): void {

    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });

    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });

  }



  ngOnDestroy(){
    this.productEvent.unsubscribe();
  }


  logOut(){
    this.checklogin.logOut();
  }


}
