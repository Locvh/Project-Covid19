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


  message: string | undefined ;

  fileName:string;



  ngOnDestroy(){
    this.productEvent.unsubscribe();
  }

  // onFileChangeMarket(event :any){

  //   var file=event.target.files[0];
  //   const formData: FormData=new FormData();
  //   formData.append('',file,file.name);

  //   this.productEvent=this.service.uploadExcelMarket(formData).subscribe((data:any)=>{
  //     this.ExcelFileName=data.toString();
  //     alert(data.toString());
  //   })
  // }

  // onFileChangeHotel(event :any){

  //   var file=event.target.files[0];
  //   const formData: FormData=new FormData();
  //   formData.append('',file,file.name);

  //   this.productEvent=this.service.uploadExcelHotel(formData).subscribe((data:any)=>{
  //     this.ExcelFileName=data.toString();
  //     alert(data.toString());
  //   })
  // }

  // onFileChangeHouse(event :any){

  //   var file=event.target.files[0];
  //   const formData: FormData=new FormData();
  //   formData.append('',file,file.name);

  //   this.productEvent=this.service.uploadExcelHouse(formData).subscribe((data:any)=>{
  //     this.ExcelFileName=data.toString();
  //     alert(data.toString());
  //   })
  // }

  // onFileChangeProduct(event :any){
  //   var file=event.target.files[0];
  //   const formData: FormData=new FormData();
  //   formData.append('',file,file.name);

  //   this.productEvent=this.service.uploadExcelProduct(formData).subscribe((data:any)=>{
  //     this.ExcelFileName=data.toString();
  //     alert(data.toString());
  //   })
  // }


  logOut(){
    this.checklogin.logOut();
  }


}
