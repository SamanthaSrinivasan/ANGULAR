import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { StudentDashModel } from './student-dash.model';

@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.css']
})
export class StudentDashComponent implements OnInit {

  formValue !: FormGroup;

  studentDashModelObj : StudentDashModel = new StudentDashModel();

  studentAll : any;

  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      fees:['']
    })

    this.getAllStudents();
  }

  postStudentDetails(){
    this.studentDashModelObj.firstName = this.formValue.value.firstName;
    this.studentDashModelObj.lastName = this.formValue.value.lastName;
    this.studentDashModelObj.email = this.formValue.value.email;
    this.studentDashModelObj.mobile = this.formValue.value.mobile;
    this.studentDashModelObj.fees = this.formValue.value.fees;

    this.api.postStudent(this.studentDashModelObj).subscribe(res=>{
      console.log(res);
      alert("Student Record Successfully Added");
      this.formValue.reset();
    },
    err=>{
      alert("Something Went Wrong")
    })
  }

  clickAddStudent(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  getAllStudents(){
    this.api.getStudent().subscribe(res=>{ this.studentAll = res; })
  }

  deleteStudents(data:any){
    this.api.deleteStudent(data.id).subscribe(res=> { alert("Record Deleted Successfully");
    this.getAllStudents();  })
  }

  onEdit(data:any){
    this.showAdd=false;
    this.showUpdate=true;

    this.studentDashModelObj.id = data.id;
    this.formValue.controls['firstName'].setValue(data.firstName);
    this.formValue.controls['lastName'].setValue(data.lastName);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['fees'].setValue(data.fees);
  }

  updateStudentDetails(){
    this.studentDashModelObj.firstName = this.formValue.value.firstName;
    this.studentDashModelObj.lastName = this.formValue.value.lastName;
    this.studentDashModelObj.email = this.formValue.value.email;
    this.studentDashModelObj.mobile = this.formValue.value.mobile;
    this.studentDashModelObj.fees = this.formValue.value.fees;

    this.api.updateStudent(this.studentDashModelObj,this.studentDashModelObj.id).subscribe(res=>{
      alert("Record Updated Successfully");
      this.formValue.reset();
      this.getAllStudents();
    })
  }


}
