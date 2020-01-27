import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  empData: Object[];

  constructor() { }

  ngOnInit() {
    this.empData = [
      { id: '1005' , name: 'Amol' , salary: '7000', department: '.NET'},
      { id: '1009' , name: 'Daya' , salary: '1000', department: 'TESTING'},
      { id: '1008' , name: 'Neelima' , salary: '81000', department: 'TESTING' },
      { id: '1001' , name: 'Rahul' , salary: '9000', department: 'JAVA' },
      { id: '1007' , name: 'Rajita' , salary: '21000', department: 'BI' },
      { id: '1004' , name: 'Sachin' , salary: '11500', department: 'ORAAPS' },
      { id: '1003' , name: 'Uma' , salary: '12000', department: 'JAVA' },
      { id: '1002' , name: 'Vikash' , salary: '11000', department: 'ORAAPS' },
      { id: '1006' , name: 'Vishal' , salary: '17000', department: 'BI' }];
  }

}
