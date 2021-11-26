import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-registration',
  templateUrl: './success-registration.component.html',
  styleUrls: ['./success-registration.component.css']
})
export class SuccessRegistrationComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onBack(){

   this.router.navigate(['/']);
  }

}
