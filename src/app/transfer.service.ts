import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
   private urlHistory: Array<any>;
   private cart:Array<any>;
   private cartIndex:Array<any>;
   private Qty:number;

  constructor() {
     this.urlHistory = [];
     this.cart =[];
     this.cartIndex=[];
   }

   //to set an get the array that contains JSON data
   public setUrlHistoryObj(val: Array<any>): void {
       this.urlHistory = val;
   }

   public getUrlHistoryObj(): Array<any> {
       return this.urlHistory;
   }

  //to set and get the array that contains the id of selected items
   public setSelectedCart(cartArray: Array<any>): void {
        this.cart =cartArray;
   }

   public getSelectedCart(): Array<any> {
       return this.cart;
   }

   //to set and get the array that contains the modified items from cart
   public setCart(cartValues: Array<any>): void {
        this.cartIndex =cartValues;
   }

   public getCart(): Array<any> {
       return this.cartIndex;
   }

}
