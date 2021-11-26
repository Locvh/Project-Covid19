import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-show-tab',
  templateUrl: './show-tab.component.html',
  styleUrls: ['./show-tab.component.css'],
})
export class ShowTabComponent implements OnInit {
  loading$ = this.loader.loading$;
  constructor(public loader: LoadingService) { }

  isCheck: any = {
    prepare: false,
    processing: false,
    finish: false,
    cancel: false,
    complain: false,
    open:true
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

