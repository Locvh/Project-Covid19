import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-vnpay-return',
  templateUrl: './vnpay-return.component.html',
  styleUrls: ['./vnpay-return.component.css']
})
export class VnpayReturnComponent implements OnInit {

  constructor(private service: SharedService,private router: Router,private cartService: CartService) { }
  Message:string;
  ngOnInit(): void {
    var url=window.location.href;
    var val= {
        url:url
    }
   this.service.updateOrder(val).subscribe(res => {
      this.Message= res;
    });
  }

  onBack(){
    localStorage.removeItem("totalShip");
    this.router.navigate(['/shopping']);
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
