
import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }
Employee:string;
  EmployeeList:any[];
ModalTitle:string;
ActivateAddEditempComp:boolean=false;
ActivateViewempComp:boolean=false;
emp:any;

  ngOnInit() {
    this.refreshempList();
  }

 

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Deparment:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.jpg"
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditempComp=true;
    this.ActivateViewempComp=false;
  }

  editClick(item){
this.emp=item;
this.ModalTitle="Edit Employee";
this.ActivateAddEditempComp=true;
this.ActivateViewempComp=false;
  }

deleteClick(item)
{
  if(confirm('Are you sure?'))
  {
    this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
      alert(data.toString());
    this.refreshempList();
    });
  }

}

viewClick(item)
{
  this.emp=item;

  this.ModalTitle="View Employee";
  this.ActivateViewempComp=true;
  this.ActivateAddEditempComp=false;
 
 
}

printClick()
{
  var printVar=document.getElementById("EmployeeTable");
  var newWin =window.open( " " );
  newWin.document.write(printVar.outerHTML);
  newWin.print();
  newWin.close();
}

closeClick(){
  this.ActivateAddEditempComp=false;
  this.refreshempList();
}

  refreshempList(){
    this.service.getempList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

}
