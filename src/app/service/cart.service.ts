import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bill } from '../shopping-cart/class/bill';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // public CartItemList: any=[];

  getLocalStorage = () => {
    let list = localStorage.getItem('cartList');
    return list ? JSON.parse(localStorage.getItem('cartList')) : [];
  };

  public CartItemList = this.getLocalStorage();

  public ProductList = new  BehaviorSubject<any>([]);

  bill = new Bill();

  // checkQuantity:string;

  constructor() {
    this.storeListToLocalStorage();
   }

  storeListToLocalStorage = () => {
    localStorage.setItem('cartList', JSON.stringify(this.CartItemList));
  };

  getProduct(){
    this.bill.grandTotalPrice =this.getTotalPrice();
    this.bill.grandTotalQuantity=this.getTotalQuantity();
    this.ProductList.next(this.CartItemList);
    return this.ProductList.asObservable();
  }

  addtoCart(product : any){
    const addedProduct = this.CartItemList.find(
      (p) => p.productId === product.productId
    );

    if (!!addedProduct) {
      this.toggleAmount(addedProduct.productId, 'inc');
    } else {
      this.CartItemList.push(product);
    }
    this.storeListToLocalStorage();
    this.ProductList.next(this.CartItemList);
    this.bill.grandTotalPrice =this.getTotalPrice();
    this.bill.grandTotalQuantity=this.getTotalQuantity();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.CartItemList.map((a: any) => {
      grandTotal += a.promotionPrice * a.quantity;
    });
    return grandTotal;
  }


  getTotalQuantity(): number{
    let grandTotal=0;
    this.CartItemList.map((a:any)=>{
      grandTotal+=a.quantity;
    })
    return grandTotal;
  }

  removeCartItem(product:any){
    this.CartItemList.map((a:any,index:any)=>{
      // if(product.foodID===a.foodID){
        if(product.productId===a.productId){

        let conf = confirm('Bạn có chắc chắn xóa chưa ?');
        if (conf) this.CartItemList.splice(index,1);
      }
    });
    this.bill.grandTotalPrice =this.getTotalPrice();
    this.bill.grandTotalQuantity=this.getTotalQuantity();
    this.storeListToLocalStorage();
    this.ProductList.next(this.CartItemList);

  }

  removeAllCart(){
    let conf = confirm('Bạn có chắc chắn xóa chưa ?');
    if (conf)this.CartItemList=[];
    this.storeListToLocalStorage();
    this.ProductList.next(this.CartItemList);
  }

  confirmBeforeOrder(){
    this.CartItemList=[];
    this.storeListToLocalStorage();
    this.ProductList.next(this.CartItemList);
  }

   //If 'inc' -> quantity + 1
  //If 'dec' -> quantity - 1
  toggleAmount(id: string, type: string) {
    let tempCart = this.CartItemList.map((item) => {
      // if (item.foodID === id) {
        if (item.productId === id) {
        if (type === 'inc') {

          return { ...item, quantity: item.quantity + 1 };

        }
        if (type === 'dec') {
          if (item.quantity == 1) {
            let conf = confirm('Bạn có chắc chắn giảm nó chưa?');
            if (conf) return { ...item, quantity: item.quantity - 1 };
          } else return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    }).filter((item) => item.quantity !== 0);
    this.CartItemList = tempCart;
    this.bill.grandTotalPrice =this.getTotalPrice();
    this.bill.grandTotalQuantity=this.getTotalQuantity();
    this.storeListToLocalStorage();
    this.ProductList.next(this.CartItemList);

  }


}
