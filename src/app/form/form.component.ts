import { Component, OnInit } from '@angular/core';
import { NgForm , NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

contactData:object;
constructor() { }
  contact(data:NgForm): void{
    if(!data.valid){
        console.log('ERROR');
      }
      else{
        console.log(data);
        this.contactData=data;
      }
    }

  ngOnInit() {}

}
