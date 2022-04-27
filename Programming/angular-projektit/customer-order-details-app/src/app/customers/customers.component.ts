import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import {ICustomer} from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
 
  title:string = "";
  people:any[];
  // isVisible = true;
  constructor(private dataService: DataService) { }

  ngOnInit() {

     this.title = 'Customers';

     this.dataService.getCustomers()
       .subscribe((customers:ICustomer[]) => this.people = customers);
    //  this.people = [
    //    { id:1,name:'deepika Malini',city:'Espoo',orderTotal:9.99,customerSince:new Date(2014, 7 , 10)},
    //    { id: 2, name: 'jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
    //         { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
    //         { id: 4, name: 'jim thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)}
    //  ];
  }

  // changeVisibility(){
  //   this.isVisible = ! this.isVisible;
  // }

}