import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

@Input() depart:any;
DepartmentId:string;
DepartmentName:string;

  ngOnInit() {
    this.DepartmentId=this.depart.DepartmentId;
    this.DepartmentName=this.depart.DepartmentName;

  }

  addDepartment(){
    var val = { DepartmentId:this.DepartmentId,DepartmentName:this.DepartmentName};
    this.service.addDepartment(val).subscribe(res=>{alert(res.toString());
    });
  }
 

  updateDepartment(){
    var val = { DepartmentId:this.DepartmentId,DepartmentName:this.DepartmentName};
    this.service.updateDepartment(val).subscribe(res=>{alert(res.toString());
    });
  }

}
