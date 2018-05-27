import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jsonData:Array<object>;
  isGrid:boolean;
  indexx:Array<number>; //carry the id of the selected items
  constructor(
    private qService : DataService ,
    private transfer : TransferService ,
    private router : Router
   ) {
      this.jsonData=[];
      this.getJsonData();
      this.isGrid=true; // to start the toggle with Grid View
      this.indexx=this.transfer.getCart() || []; //to keep the shopping cart with item if retured to home
      console.log(this.indexx);
  }

  ngOnInit() {
    console.log(this.indexx);
  }

  getJsonData():void{
    let path:string ="../assets/data.json";
    this.qService.getDate(path).subscribe(
      res =>{
        console.log(res);
        this.jsonData=res;
        this.transfer.setUrlHistoryObj(this.jsonData);
        this.transfer.setSelectedCart(this.indexx);
      },
      err =>{
        console.log(err);
      }
    );
  }
  // to get the id when the add to cart button is fired and then push that id to indexx array
  addCart(id:number){
    console.log(id);
    this.indexx.push(id);
    console.log(this.indexx);
  }
}
