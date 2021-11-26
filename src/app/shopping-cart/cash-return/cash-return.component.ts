import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cash-return',
  templateUrl: './cash-return.component.html',
  styleUrls: ['./cash-return.component.css']
})
export class CashReturnComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onBack(){
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
