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
  imageSeller:string;


  constructor( private router: Router,private checklogin:LoginService,private jwtHeplper: JwtHelperService) { }

  ngOnInit(): void {
    const token=localStorage.getItem("jwt");
    const decodedToken = this.jwtHeplper.decodeToken(token);
    localStorage.setItem('name',decodedToken.shopName);
    localStorage.setItem('sellerId',decodedToken.sellerId);
    localStorage.setItem('isTransport',decodedToken.isTransport);
    localStorage.setItem('imageSeller',decodedToken.imageSeller);
    this.imageSeller=localStorage.getItem("imageSeller");
    this.isTransport=localStorage.getItem("isTransport");
    this.shopname =localStorage.getItem("name");
  }

  logOut(){
    this.checklogin.logOut();
  }

}
