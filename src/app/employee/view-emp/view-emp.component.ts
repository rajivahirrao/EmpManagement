import { Component, OnInit,Input } from '@angular/core';

import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  constructor(private service:SharedService) { }
 
  @Input() emp:any;
  EmployeeId:string;
  EmployeeName:string;
  Department:string;
  DateOfJoining:string;
  PhotoFileName:string;
  PhotoFilePath:string;

  

  
  ngOnInit() {
   
   
     // this.EmployeeId=this.emp.EmployeeId;
      //this.EmployeeName=this.emp.EmployeeName;
      //this.Department=this.emp.Department;
  //this.DateOfJoining=this.emp.DateOfJoining;
  this.PhotoFilePath=this.service.PhotoUrl;
    }

    
    

  
    getemp(item : any){
    //  var val = { EmployeeId:this.EmployeeId,EmployeeName:this.EmployeeName,Department:this.Department,DateOfJoining:this.DateOfJoining,PhotoFileName:this.PhotoFileName};
      this.service.getemp(1).subscribe(data=>{
        //this.Employee=data;
      });
      };
  
   
  
    

    
  
  }
  