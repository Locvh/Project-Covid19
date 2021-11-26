import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
 // public StorageList:any;
  getLocalStorage = () => {
    let list = JSON.parse(localStorage.getItem('info'));
    return list ;
  };

  public StorageList = this.getLocalStorage();


  public InfomationList = new  BehaviorSubject<any>({});

  constructor() {
   }

   storeListToLocalStorage = () => {
    localStorage.setItem('info', JSON.stringify(this.StorageList));
  };


  getProduct(){
    this.InfomationList.next(this.StorageList);
    return this.InfomationList.asObservable();
  }

  addForm(Form : any){
    this.StorageList=Form;
    this.storeListToLocalStorage();
    this.InfomationList.next(this.StorageList);
  }


}
