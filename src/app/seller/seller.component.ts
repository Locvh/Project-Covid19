import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  shopname:string;

  isTransport:string;


  constructor( private router: Router,private checklogin:LoginService,private jwtHeplper: JwtHelperService) { }

  ngOnInit(): void {
    this.shopname =localStorage.getItem("name");
    const token=localStorage.getItem("jwt");
    const decodedToken = this.jwtHeplper.decodeToken(token);
    localStorage.setItem('isTransport',decodedToken.isTransport);
    this.isTransport=localStorage.getItem("isTransport");
  }

  logOut(){
    this.checklogin.logOut();
  }

}
