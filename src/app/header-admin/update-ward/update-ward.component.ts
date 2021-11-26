import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-ward',
  templateUrl: './update-ward.component.html',
  styleUrls: ['./update-ward.component.css']
})
export class UpdateWardComponent implements OnInit, OnDestroy {
  public infecteds: any = [];
  updateAmount: string = "";
  wardNameFilter: string = "";
  myFormArray = new FormArray([]);



  infectEvent: Subscription = new Subscription();

  pageSize: number = 30;

  pageNumber: number = 1;

  total: number;

  constructor(private service: SharedService) { }


  ngOnInit(): void {
    this.searchInfected();

  }
  onReset() {
    this.wardNameFilter = '';
    this.pageNumber = 1;
    this.onload();
  }

  onload() {
    // this.wardNameFilter = '';
    // this.infectEvent = this.service.getAllInfected(this.wardNameFilter, this.pageSize, this.pageNumber).subscribe(data => {
    //   this.total = data.totalCount;
    //   this.infecteds = data.items;
    //   this.infecteds.forEach((a: any) => {
    //     Object.assign(a, { quantity: 1, total: a.amountInfected });
    //   });
    // },
    //   (error) => console.error(error)
    // );

  }

  ngOnDestroy() {
    this.infectEvent.unsubscribe();
  }

  searchInfected() {
    // this.wardNameFilter = this.wardNameFilter || '';
    // this.pageNumber = 1;
    // this.myFormArray = new FormArray([]);
    // this.infectEvent = this.service.getAllInfected(this.wardNameFilter, this.pageSize, this.pageNumber).subscribe(data => {
    //   this.total = data.totalCount;
    //   this.infecteds = data.items;
    //   this.infecteds.forEach(infect => {
    //     this.myFormArray.push(new FormControl(infect.amountInfected, Validators.required));
    //   });
    // },
    //   (error) => console.error(error)
    // );

  }

  UpdateAmount(Id: string, index: any) {
    // let infected = this.infecteds.find((b) => b.Id === Id);
    // console.log(infected);
    // infected.amountInfected = this.myFormArray.controls[index].value;
    // const updateObject = {
    //   Id: infected.Id,
    //   amountInfected: infected.amountInfected,
    // };
    // this.infectEvent = this.service.updateamountInfected(updateObject).subscribe(() => {
    //   window.alert("Chỉnh sửa thành công");
    // },
    //   (error) => window.alert('Update không thành công ' + error.message)
    // );
  }


}
