import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartIndex:Array<number>; //array that will contains the id numbers of the selected data i recieved from transfer service
  selectedData:Array<object>; //array that will contains the objects of selected data
  data:Array<any>;
  constructor( private transfer : TransferService ) {
    this.selectedData=[];
    this.cartIndex = this.transfer.getSelectedCart();
    this.data = this.transfer.getUrlHistoryObj();
    this.transfer.setCart(this.cartIndex);
    console.log(this.data);
    console.log(this.cartIndex);
   }

  ngOnInit() {
    console.log(this.selectedData);
    console.log(this.data);
    console.log(this.cartIndex);

    /** looping on array -cartIndex- contains selected id and and data - Array of objects - to
    check and get the object that matched the id in cartIndex **/

    for(var i=0;i<this.cartIndex.length;i++){
      for(var k=0;k<this.data.length;k++){
      if(this.data[k].id == this.cartIndex[i])
      {
        this.selectedData.push(this.data[k]);
      }
    }
  }
}

//Here goes the delete code

  delete(id:number){
    console.log(id);
    console.log(this.selectedData);
    for(let i=0; i<this.selectedData.length ; i++)
    {
      if( this.selectedData[i]['id'] == id)
      {
        this.selectedData.splice(i,1);
        this.cartIndex.splice(i,1);
        console.log(this.selectedData);
      }
    }
    console.log(this.selectedData);
    console.log(this.cartIndex);
  }
}
