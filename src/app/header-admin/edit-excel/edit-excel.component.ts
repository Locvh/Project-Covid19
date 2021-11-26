import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-edit-excel',
  templateUrl: './edit-excel.component.html',
  styleUrls: ['./edit-excel.component.css']
})

export class EditExcelComponent implements OnInit , OnDestroy {
  public houses:any = [];

  houseAddressFilter:string="";

  updatehouseAddress:string="";
  updatehouseStatus:string="";



  houseEvent :Subscription = new Subscription();

  pageSize: number = 20;

  pageNumber: number = 1;

  total: number ;

  constructor(private service: SharedService) {}


  ngOnInit(): void {
   this.searchHouse();

  }
  onReset(){
    this.houseAddressFilter='';
    this.pageNumber=1;
    this.onload();
  }


  onload(){
    // this.houseAddressFilter='';
    // this.houseEvent=this.service.searchHousePage(this.houseAddressFilter,this.pageSize,this.pageNumber).subscribe(data => {
    //   this.total=data.totalCount;
    //   this.houses = data.items;
    //   },
    //       (error) => console.error(error)
    //     );

  }

  ngOnDestroy(){
    this.houseEvent.unsubscribe();
  }

  searchHouse(){
    // this.pageNumber=1;
    // this.houseAddressFilter=this.houseAddressFilter||'';

    // this.houseEvent=this.service.searchHousePage(this.houseAddressFilter,this.pageSize,this.pageNumber).subscribe(data => {
    //   this.total=data.totalCount;
    //   this.houses = data.items;
    //   },
    //   (error) => console.error(error)
    // );
  }

  deleteHouse(item:string){
    // var deleteHouse= JSON.parse(JSON.stringify(item));
    // if(confirm('Are you sure ?')){
    //   this.houseEvent=this.service.deleteHouse(deleteHouse).subscribe(()=>{
    //     this.onReset();
    //   },
    //   (error) => console.error(error)
    //   );
    // }
  }
  ProcessHouse(houseID: string) {
    // let house = this.houses.find((b) => b.houseID === houseID);
    // house.isLockdown = true;
    // const updateObject = {
    //   houseID: house.houseID,
    //   isLockdown: house.isLockdown,
    // };

    // this.houseEvent=this.service.updateHouse(updateObject).subscribe();
  }

}
