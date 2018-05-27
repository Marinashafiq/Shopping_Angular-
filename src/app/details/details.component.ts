import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  data:Array<any>; //contains the JSON data.
  id:number;
  selected:object; //Object contain the data of the selected item
  indexx:Array<number>; //array contains the id that i got from home page and sent through transfer service
  constructor( private transfer : TransferService , private route: ActivatedRoute ) {
    this.data=this.transfer.getUrlHistoryObj();
    console.log(this.data);
    this.selected={};
    this.indexx=this.transfer.getCart();
    this.transfer.setCart(this.indexx);
   }

  ngOnInit() {
    //Here's where i got data for details View
    this.route.queryParams.subscribe(params=>{
      console.log(params);
      console.log(params.name);
      console.log("data",this.data);
      for(let item of this.data){
        if(params.name == item.name)
        {
          console.log("FOUND");
          this.selected=item;
        }
      }
      console.log(this.selected);
    });
  }
 //addCart recieved id from the clicked item
  addCart(id:number){
    console.log(id);
    this.indexx.push(id);
    console.log(this.indexx);
  }

}
