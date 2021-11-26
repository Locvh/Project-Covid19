import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../service/cart.service';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  public totalItem :number=0;

  productEvent:Subscription = new Subscription();


  constructor(private cartService:CartService, private router: Router) { }

  ngOnInit(): void {
    this.productEvent=this.cartService.getProduct().subscribe(res=>{
      this.totalItem=res.length;
    });
  }

  ngOnDestroy(){
    this.productEvent.unsubscribe();
  }

  checkPhone(){
    var data = JSON.parse(localStorage.getItem('phoneCheck'));
    if(data === null){
      this.router.navigate(['/search-phone']);
    }else{
      this.router.navigate(['/show-view-history']);
    }
  }
}
