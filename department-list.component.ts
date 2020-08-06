import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `<h1>LIST OF DEPARTMENTS :</h1>
  <ul>
  <li *ngFor="let dept of deptlist">{{dept}}</li>
  </ul>
  `,
  
})
export class DepartmentListComponent implements OnInit {

  deptlist=['IT','CSE','ECE','EEE']
  todovalue: string;
  constructor() { }

  ngOnInit(): void {
  }
  addvalue(){
    if(this.todovalue='')
    {
      alert('Enter something')
      
      }
      
    }
    
  

}
