import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface PeriodicElement {
  first_name: string;
  last_name: string;
  mobile: number;
  dob: string;
  department: string;
  skill: string;
  address: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class UsersComponent implements OnInit {
  
  public data: any;
  columnsToDisplay = ['first_name', 'last_name', 'mobile', 'dob','department','skill'];
  dataSource = this.data;
  expandedElement: PeriodicElement;
  
  constructor(private service: UserdataService) {
  
    this.getDetails();
  }
  getDetails() {
    this.service.getData().subscribe(result => {
      this.data = result
      // const details = JSON.stringify(this.data)
      console.log(this.data)
      // console.log(JSON.stringify(this.data));
    });
  }
  ngOnInit() { }
}
