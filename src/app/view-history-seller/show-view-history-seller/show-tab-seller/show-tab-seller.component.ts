import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-show-tab-seller',
  templateUrl: './show-tab-seller.component.html',
  styleUrls: ['./show-tab-seller.component.css']
})
export class ShowTabSellerComponent implements OnInit {

  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService) { }

  isCheck: any = {
    prepare: false,
    processing: false,
    finish: false,
    cancel: false,
    open: true
  };

  ngOnInit(): void {
  }

  showProcess(processName: string) {
    Object.keys(this.isCheck).forEach((key) => {
      key === processName
        ? (this.isCheck[key] = true)
        : (this.isCheck[key] = false);
    });

  }

}
