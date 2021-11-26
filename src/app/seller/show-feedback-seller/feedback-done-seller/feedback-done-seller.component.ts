import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';
import { SharedService } from 'src/app/service/shared.service';
@Component({
  selector: 'app-feedback-done-seller',
  templateUrl: './feedback-done-seller.component.html',
  styleUrls: ['./feedback-done-seller.component.css']
})
export class FeedbackDoneSellerComponent implements OnInit  , OnDestroy {


  feedbackEvent: Subscription = new Subscription();

  feedbacks: any = [];

  feedbackFilter: string = '';

  total: number;

  feedbackId:any;

  ActivateEditPromotion: boolean = false;

  pageSize: number = 10;

  pageNumber: number = 1;

  status: string;

  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService,private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.searchfeedback();
  }

  onReset() {
    this.feedbackFilter = '';
    this.pageNumber = 1;
    this.pageNevigation();
  }

  ngOnDestroy() {
    this.feedbackEvent.unsubscribe();
  }

  pageNevigation() {
    this.feedbackFilter = this.feedbackFilter || '';
    this.status = 'Done';
    const sellerId=localStorage.getItem("sellerId");
    this.feedbackEvent = this.service.getFeedbackSeller(sellerId,this.status, this.feedbackFilter, this.pageSize, this.pageNumber).subscribe(data => {
      this.total = data.totalCount;
      this.feedbacks = data.items;
    });
  }


  searchfeedback() {
    this.pageNumber = 1;
    this.pageNevigation();
  }


  onBack(){
    this.router.navigate(['/seller',localStorage.getItem("sellerId")]);
  }

  addClick2(item:any) {
    this.feedbackId=item;
    this.ActivateEditPromotion=true;
  }

  closeClick(){
    this.ActivateEditPromotion=false;
    this.pageNevigation();
  }

}
