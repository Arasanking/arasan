import { detailsservice } from './../../../login/src/app/details.service';
import { Component } from '@angular/core';
import {todo} from './todo';
import { PatternValidator, Validators,FormBuilder } from '@angular/forms';
import { NONE_TYPE } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'contact-form';
  date = new Date();
  stuname:string;
  phone:number;
  list:todo[];   
  email: string;
  regno: number;
 

  ngOnInit(){
    this.list=[];
    this.stuname='';
    this.phone=null;
  }
  addvalue(){
    if((this.phone && this.regno && this.email && this.stuname)!=null){
      const newitem:todo={
        id:Date.now(),
        value:this.stuname,
        isDone:false
  
      }
      this.list.push(newitem) 
    }
    if(this.stuname!==''){
     
    
      const newitem:todo={
        id:Date.now(),
        value:this.stuname,
        isDone:false
      }
      this.list.push(newitem)   
    }
    
    this.stuname='';
    this.phone=null;
    this.email='';
    this.regno=null;
    this.dob=null;
    this.gender='';

    
  }
  

deleteItem(id:number)
{
  this.list = this.list.filter(item => item.id!==id);
}
}
