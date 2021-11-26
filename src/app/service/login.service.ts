import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private jwtHeplper: JwtHelperService) {
  }


  getRole(){
    const token=localStorage.getItem("jwt");
    const decodedToken = this.jwtHeplper.decodeToken(token);
    localStorage.setItem('name',decodedToken.shopName);
    localStorage.setItem('sellerId',decodedToken.sellerId);
    // localStorage.setItem('isTransport',decodedToken.isTransport);
      if(decodedToken.role=="ADMIN"){

        // this.router.navigate(['/header-admin']);
        this.router.navigate(['/contract-manager']);
      }
      else if(decodedToken.role=="ADMIN_MANAGER"){
        // this.router.navigate(['/header-admin-FB']);
        this.router.navigate(['/view-history-admin']);
      }
      else if(decodedToken.role=="SELLER"){
        // this.router.navigate(['/seller',decodedToken.accountId]);
        this.router.navigate(['/view-history-seller']);
      }

    }

    logOut(){
      localStorage.removeItem("jwt");
      localStorage.removeItem("name");
      localStorage.removeItem("sellerId");
      localStorage.removeItem("isTransport");
      this.router.navigate(['/shopping']);
    }


}
