import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { getProduct } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrlNew='http://communitycovidmarket.azurewebsites.net/api/';
  readonly APIUrlGoong='https://rsapi.goong.io/Place/AutoComplete';


  constructor(private http: HttpClient) {}

  //-------------Account--------------
  getLoginAccount(formData){
    return this.http.post<any>(this.APIUrlNew + 'account/Authenticate',formData);
  }
  //-------------------------------------
  //-------------Seller--------------
  addSeller(val:any){
    return this.http.post(this.APIUrlNew+'seller/addSeller',val);

  }


searchSellerPages(location: string, productName:string,pageSize: number, pageNumber:number) {
  let params = new HttpParams().set("location",location).set("productName",productName).set("pageSize",JSON.stringify(pageSize)).set("pageNumber", JSON.stringify(pageNumber));
  return this.http.get<any>(this.APIUrlNew + "seller/getAllSellerByLocation", { params: params })
}
sellerNearBy(location: string) {
  let params = new HttpParams().set("location",location);
  return this.http.get<any>(this.APIUrlNew + "seller/getTopSeller", { params: params })
}

//-------------------------------------

//--------------Product----------------

searchProductbySellerID(productName:string, sellerId:string,pageSize: number, pageNumber:number):Observable<getProduct[]> {
  let params = new HttpParams().set("productName",productName).set("sellerId",sellerId).set("pageSize",JSON.stringify(pageSize)).set("pageNumber", JSON.stringify(pageNumber));
  return this.http.get<getProduct[]>(this.APIUrlNew + "product/getProductBySellerId", { params: params })
}


searchProductbySellerIDHaveIsavaible(productName:string, sellerId:string,pageSize: number, pageNumber:number) {
  let params = new HttpParams().set("productName",productName).set("sellerId",sellerId).set("pageSize",JSON.stringify(pageSize)).set("pageNumber", JSON.stringify(pageNumber));
  return this.http.get<any>(this.APIUrlNew + "product/getProductBySellerIdNoAvailable", { params: params })
}



getTopProduct():Observable<getProduct[]> {
  return this.http.get<getProduct[]>(this.APIUrlNew + "product/getTopProduct")
}

getTopProductSales():Observable<getProduct[]> {
  return this.http.get<getProduct[]>(this.APIUrlNew + "product/getTopProductWithPromotion")
}


//------------Contract----------------
searchContractPages(status:string,phone:string,pageSize: number, pageNumber:number) {
  let params = new HttpParams().set("status",status).set("phoneNumber",phone).set("pageSize",JSON.stringify(pageSize)).set("pageNumber", JSON.stringify(pageNumber));
  return this.http.get<any>(this.APIUrlNew + "registerForm/getAllRegisterFormWithPageSize", { params: params })
}

updateTransport(val:any) {
  return this.http.post<any>(this.APIUrlNew + "seller/updateTransportSeller",val);
}

getInfoContract(registerFormId: string) {
  let params = new HttpParams().set("sellerId",registerFormId);
  return this.http.get<any>(this.APIUrlNew + "registerForm/getSellerById", { params: params });
}

 updateContractStatus(val: any): Observable<any[]> {
  return this.http.post<any>(this.APIUrlNew + 'registerForm/updateSellerStatus', val);
}


//---------------------------------------

//------------Add Product Of Seller----------------
getAllProductPage(pageSize: number, pageNumber:number) {
  let params = new HttpParams().set("pageSize",JSON.stringify(pageSize)).set("pageNumber", JSON.stringify(pageNumber));
  return this.http.get<any>(this.APIUrlNew + "product/getProductByPageSizeAndpageNumber", { params: params })
}

addProduct(val:any){
  return this.http.post<any>(this.APIUrlNew + 'product/addProduct',val);
}
updateProduct(val:any){
  return this.http.post<any>(this.APIUrlNew + 'product/updateProduct',val);
}

  updateIsAvaiableProduct(val:any) {
    return this.http.post<any>(this.APIUrlNew + "product/updateIsAvaiableProduct",val);
  }

  deleteProduct(val:any) {
    return this.http.post<any>(this.APIUrlNew + "product/deleteProductByProductId",val);
  }

  getProductId(productId:string):Observable<getProduct> {
    let params = new HttpParams().set("productId",productId);
    return this.http.get<getProduct>(this.APIUrlNew + "product/GetProductByProductId", { params: params })
  }
//---------------Add order ---------------------------
  addOrder(val:any){
    return this.http.post<any>(this.APIUrlNew+'order/addNewOrder',val);
  }
  updateOrder(val:any){
    return this.http.post<any>(this.APIUrlNew+'vnpay/IPN',val);
  }
  //------------------history--------------------------
  searchBillPagesSeller(sellerId:string,status:string,phone:string,pageSize: number, pageNumber:number) {
    let params = new HttpParams().set("orderStatus",status).set("sellerId",sellerId).set("phoneNumber",phone).set("pageSize",JSON.stringify(pageSize)).set("pageNumber", JSON.stringify(pageNumber));
    return this.http.get<any>(this.APIUrlNew + "order/getHistoryByOrderStatusAndSellerId", { params: params })
  }

  //need admin
  searchBillPages(status:string,phone:string,pageSize: number, pageNumber:number) {
    let params = new HttpParams().set("orderStatus",status).set("phoneNumber",phone).set("pageSize",JSON.stringify(pageSize)).set("pageNumber", JSON.stringify(pageNumber));
    return this.http.get<any>(this.APIUrlNew + "order/getHistoryByOrderStatus", { params: params })
  }


  // need
  searchBillPagesPhone(statusOder:string,phone:string,searchName:string,pageSize: number, pageNumber:number) {
    let params = new HttpParams().set("statusOder",statusOder).set("phoneNumber",phone).set("searchName",searchName).set("pageSize",JSON.stringify(pageSize)).set("pageNumber", JSON.stringify(pageNumber));
    return this.http.get<any>(this.APIUrlNew + "order/getTotalOrderByPhoneNumber", { params: params })

  }

  //need
  searchBillSeller(totalOrderId:string) {
    let params = new HttpParams().set("totalOrderId",totalOrderId);
    return this.http.get<any>(this.APIUrlNew + "order/getOrderByTotalOrder", { params: params })
  }


  getBillInfor(orderId: string) {
    let params = new HttpParams().set("orderId",orderId);
    return this.http.get<any>(this.APIUrlNew + "order/getOrderDetailByOrder", { params: params })
  }

  getInfo(orderId: string) {
    let params = new HttpParams().set("orderId",orderId);
    return this.http.get<any>(this.APIUrlNew + "order/getPriceAndQuantityByOrderId", { params: params })
  }
  //------------------------Đăng kí seller--------------------------------------
  addContract(val:any){
    return this.http.post<any>(this.APIUrlNew+'registerForm/addRegisterForm',val);
  }

//----------------Update info seller---------

updatePassword(val:any){
  return this.http.post<any>(this.APIUrlNew + 'account/updateAccountSeller',val);
}

getInfoSeller(sellerId: string) {
  let params = new HttpParams().set("sellerId",sellerId);
  return this.http.get<any>(this.APIUrlNew + "seller/getSellerBySellerId", { params: params })
}
updateSeller(val:any){
  return this.http.post<any>(this.APIUrlNew + 'seller/updateSeller',val);
}

 //--------------update status order-------------

 updateBillStatus(val: any): Observable<any[]> {
  return this.http.post<any>(this.APIUrlNew + 'order/updateOrderStatus', val);
}
 updateBillStatusList(val: any): Observable<any[]> {
  return this.http.post<any>(this.APIUrlNew + 'order/updateListOrderStatus', val);
}

//--------------export file -------------------
saveFileProcess(startDate:string,endDate:string) {
  let params = new HttpParams().set("startDate",startDate).set("endDate",endDate);
  let HTTPOptions:Object = {
    responseType: 'blob',
    params: params
 }
  return this.http.get<any>(this.APIUrlNew + "excel/ExportProcessingHistoryData",HTTPOptions);
}
saveFileDone(startDate:string,endDate:string) {
  let params = new HttpParams().set("startDate",startDate).set("endDate",endDate);
  let HTTPOptions:Object = {
    responseType: 'blob',
    params: params
 }
  return this.http.get<any>(this.APIUrlNew + "excel/ExportDoneHistoryData",HTTPOptions);
}



saveFilePrepare(startDate:string,endDate:string) {
  let params = new HttpParams().set("startDate",startDate).set("endDate",endDate);
  let HTTPOptions:Object = {
    responseType: 'blob',
    params: params
 }
  return this.http.get<any>(this.APIUrlNew + "excel/ExportNewHistoryData",HTTPOptions);
}

//------------------------ promotion-----------------
addPromotion(val:any){
  return this.http.post<any>(this.APIUrlNew+'promotion/addPromotion',val);
}


getProductNoPromotion(sellerId:string) {
  let params = new HttpParams().set("sellerId",sellerId);
  return this.http.get<any>(this.APIUrlNew + "product/getProductNoPromotionBySellerId", { params: params })
}


getProductOfPromotion(sellerId:string,promotionId:string) {
  let params = new HttpParams().set("sellerId",sellerId).set("promotionId",promotionId);
  return this.http.get<any>(this.APIUrlNew + "product/getProductNameByPromotionIdAndSellerId", { params: params })
}


getPromotionPage(sellerId:string,pageSize: number, pageNumber:number) {
  let params = new HttpParams().set("sellerId",sellerId).set("pageSize",JSON.stringify(pageSize)).set("pageNumber", JSON.stringify(pageNumber));
  return this.http.get<any>(this.APIUrlNew + "promotion/getPromotionBySellerId", { params: params })
}
updatePromotion(val:any){
  return this.http.post<any>(this.APIUrlNew + 'promotion/updatePromotionById',val);
}
updatePromotionOfProductID(val:any){
  return this.http.post<any>(this.APIUrlNew + 'promotion/updatePromotion',val);
}

deletePromotionOfProductID(val:any){
  return this.http.post<any>(this.APIUrlNew + 'product/updateProductCancelPromotion',val);
}

getPromotionId(promotionId:string) {
  let params = new HttpParams().set("promotionId",promotionId);
  return this.http.get<any>(this.APIUrlNew + "promotion/getPromotionByPromotionIdNoPage", { params: params })
}

//-------------------------- feedback-------------------
addFeedback(val:any){
  return this.http.post<any>(this.APIUrlNew + 'feedback/addFeedback',val);
}
getFeedback(status:string,phoneNumber:string,pageSize: number, pageNumber:number) {
  let params = new HttpParams().set("status",status).set("phoneNumber",phoneNumber).set("pageSize",JSON.stringify(pageSize)).set("pageNumber", JSON.stringify(pageNumber));
  return this.http.get<any>(this.APIUrlNew + "feedback/getFeedbackByStatusAndPhoneNumber", { params: params })
}
getFeedbackSeller(sellerId:string,status:string,phoneNumber:string,pageSize: number, pageNumber:number) {
  let params = new HttpParams().set("sellerId",sellerId).set("status",status).set("phoneNumber",phoneNumber).set("pageSize",JSON.stringify(pageSize)).set("pageNumber", JSON.stringify(pageNumber));
  return this.http.get<any>(this.APIUrlNew + "feedback/getFeedbackBySellerIdAndPhoneNumberAndStatus", { params: params })
}
getFeedbackID(feedbackId:string) {
  let params = new HttpParams().set("feedbackId",feedbackId);
  return this.http.get<any>(this.APIUrlNew + "feedback/getFeedbackByFeedbackId", { params: params })
}

updateFeedbackStatus(val: any): Observable<any[]> {
  return this.http.post<any>(this.APIUrlNew + 'feedback/updateStatusFeedbackByFeedbackId', val);
}

//------------------------get ship--------------------------

getShip(location:string,sellerId:string) {
  let params = new HttpParams().set("address",location).set("sellerId",sellerId);
  return this.http.get<any>(this.APIUrlNew + "ship/calculatorShipFee", { params: params })
}
getShipId(sellerId:string) {
  let params = new HttpParams().set("sellerId",sellerId);
  return this.http.get<any>(this.APIUrlNew + "ship/getShipFeeBySellerIdNoPage", { params: params })
}
updateShip(val:any){
  return this.http.post<any>(this.APIUrlNew + 'ship/updateShipFeeByShipId',val);
}
// --------------------get address------------------------
autocomplete(api_key: string, location:string,input:string) {
  let params = new HttpParams().set("api_key",api_key).set("location",location).set("input",input);
  return this.http.get<any>(this.APIUrlGoong , { params: params });
}

// -----------------------map-------------------------------
getInfectedById(Id: string) {
  let params = new HttpParams().set("Id",Id);
  return this.http.get<any>(this.APIUrlNew + "Infected/getInfectByID", { params: params })
}

//-----------------------export file excel-------------------
searchSellerauthorityPages(shopName:string,pageSize: number, pageNumber:number) {
  let params = new HttpParams().set("shopName",shopName).set("pageSize",JSON.stringify(pageSize)).set("pageNumber", JSON.stringify(pageNumber));
  return this.http.get<any>(this.APIUrlNew + "seller/getSellerByTransport", { params: params })
}
addProductByExcel(val:any){
  return this.http.post<any>(this.APIUrlNew +'excel/readProductByAdmin',val);
}
}
