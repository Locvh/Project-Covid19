import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-manager',
  templateUrl: './contract-manager.component.html',
  styleUrls: ['./contract-manager.component.css']
})
export class ContractManagerComponent implements OnInit {

  constructor() { }

  isCheck: any = {
    New: false,
    Reject: false,
    Done: false,
    Open:true
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
