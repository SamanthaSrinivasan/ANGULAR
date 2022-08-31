import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm! : FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  //Login --> get the info from signup page in json server -- data will be stored after signup()
  login(){
    this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email &&
               a.password === this.loginForm.value.password
      }) // to match email and pwd in login using user variable which is used to find in res of signup
      
      if(user){
        alert("Login Successful");
        this.loginForm.reset();
        this.router.navigate(['restaurant'])
      }
      else{
        alert("User Not Found");
      }
    },
    err=>{
      alert("Something went wrong");
    })
  }

}
