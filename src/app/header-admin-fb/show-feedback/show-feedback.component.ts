import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-feedback',
  templateUrl: './show-feedback.component.html',
  styleUrls: ['./show-feedback.component.css']
})
export class ShowFeedbackComponent implements OnInit {

  isCheck: any = {
    New: false,
    Processing: false,
    Reject: false,
    Done: false,
    Open: true
  };

  ngOnInit(): void {}

  showProcess(processName: string) {
    Object.keys(this.isCheck).forEach((key) => {
      key === processName
        ? (this.isCheck[key] = true)
        : (this.isCheck[key] = false);

    });
  }

}
