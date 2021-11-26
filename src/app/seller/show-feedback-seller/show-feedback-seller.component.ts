import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-feedback-seller',
  templateUrl: './show-feedback-seller.component.html',
  styleUrls: ['./show-feedback-seller.component.css']
})
export class ShowFeedbackSellerComponent implements OnInit {

  isCheck: any = {
    processing: false,
    finish: false,
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
