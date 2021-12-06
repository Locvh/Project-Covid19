import { Component, OnInit ,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements
OnInit,OnDestroy {
  public products: any = [];

  productNameFilter:string="";

  productEvent :Subscription =new Subscription();

  pageSize: number = 10;

  pageNumber: number = 1;

  total: number ;

  loading$ = this.loader.loading$;

  ModalTitle: string | undefined ;

  ActivateEditPromotion: boolean = false;

  product: any;

  productID: any;

  message: string;

  constructor(public loader: LoadingService,private service: SharedService, private router: Router) {}


  ngOnInit(): void {
   this.nextPage();
  }
  onReset(){
     this.productNameFilter='';
    this.pageNumber=1;
    this.searchProduct();
  }

  ngOnDestroy(){
    this.productEvent.unsubscribe();
  }

  searchProduct(){
    this.pageNumber=1;
    this.pageNevigation();
  }

  pageNevigation(){
    this.productNameFilter=this.productNameFilter||'';
    const sellerId=localStorage.getItem("sellerId");
     this.productEvent=this.service.searchProductbySellerIDHaveIsavaible(this.productNameFilter,sellerId,this.pageSize,this.pageNumber).subscribe(data => {
      this.total=data.totalCount;
      this.products = data.items;
      },
        (error) => console.error(error)
      );

  }

  nextPage() {
    this.router.navigate(['/show-product-seller'], { queryParams: { pageNumber: this.pageNumber} });
    this.pageNevigation();
  }


  updateIsAvaiableProduct(item:string,isAvaible:boolean){
    const updateObject = {
        productId: item,
        isAvaible : isAvaible
        };
      this.productEvent=this.service.updateIsAvaiableProduct(updateObject).subscribe(res=>{
        this.nextPage();
      },
      (error) => console.error(error)
      );
  }


  deleteClick(item:string){
    const updateObject = {
        productId: item
        };
    this.productEvent=this.service.deleteProduct(updateObject).subscribe(res=>{
        this.nextPage();
      },
    (error) => console.error(error)
    );
  }


  addClick() {
    this.product={
      productName: "",
      unitPrice: "",
      unitProduct: "",
      imageProduct: "",
      descriptionProduct: "",
      categoryProduct: "",
    };
    this.ActivateEditPromotion=true;
  }

    EditClick(item:any) {
      this.productID=item;
      this.ActivateEditPromotion=true;

    }

    closeClick(){
      this.ActivateEditPromotion=false;
      this.pageNevigation();
    }


    onChangeUploadExcel(event: any) {
      var file = event.target.files[0];
      const formData: FormData = new FormData();
      formData.append('', file, file.name);
      this.productEvent = this.service.addProductByExcel(formData).subscribe((data: any) => {
        this.message=data;
      })


    }

    downloadExcel(){
      let link = document.createElement("a");
      link.download = "Excel_"+ localStorage.getItem("sellerId");
      link.href = "assets/Template.xlsx";
      link.click();
  }
  downloadWord(){
    let link = document.createElement("a");
    link.download = "Hướng dẫn";
    link.href = "assets/Guide.docx";
    link.click();
  }
}
