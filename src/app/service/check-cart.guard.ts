import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CheckCartGuard implements CanActivate {
  constructor(private routes:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      const checking = JSON.parse(localStorage.getItem("cartList"));
      if(checking.length !== 0 && typeof checking ==="object" ){
        return true;
      }else{
      this.routes.navigate(["/shopping"]);
      return false;
      }
  }

}
