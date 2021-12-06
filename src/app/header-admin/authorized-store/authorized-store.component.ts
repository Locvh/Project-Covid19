import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { LoadingService } from 'src/app/service/loading.service';
@Component({
  selector: 'app-authorized-store',
  templateUrl: './authorized-store.component.html',
  styleUrls: ['./authorized-store.component.css']
})
export class AuthorizedStoreComponent implements OnInit , OnDestroy{

  storeEvent: Subscription = new Subscription();

  stores: any = [];

  storeFilter: string = '';

  total: number;


  pageSize: number = 8;

  pageNumber: number = 1;

  status: string;

  message: string;

  storeId: any;

  ActivateEditPromotion: boolean = false;
  loading$ = this.loader.loading$;
  private _toastr: any;

  constructor(public loader: LoadingService, private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.searchStore();
  }

  onReset() {
    this.storeFilter = '';
    this.pageNumber = 1;
    this.pageNevigation();
  }

  ngOnDestroy() {
    this.storeEvent.unsubscribe();
  }

  pageNevigation() {
    this.storeFilter = this.storeFilter || '';
    this.storeEvent = this.service.searchSellerauthorityPages(this.storeFilter, this.pageSize, this.pageNumber).subscribe(data => {
      this.total = data.totalCount;
      this.stores = data.items;
    });
  }


  searchStore() {
    this.pageNumber = 1;
    this.pageNevigation();
  }


  downloadExcel(sellerKey: string){
    let link = document.createElement("a");
    link.download = "Excel_"+sellerKey;
    link.href = "assets/Template.xlsx";
    link.click();
}
  downloadWord(){
  let link = document.createElement("a");
  link.download = "Hướng dẫn";
  link.href = "assets/Guide.docx";
  link.click();
}
onChangeUploadExcel(event: any) {
  var file = event.target.files[0];
  const formData: FormData = new FormData();
  formData.append('', file, file.name);
  this.storeEvent = this.service.addProductByExcel(formData).subscribe((data: any) => {
    this.message=data;
  })


}


}
