import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) { }

 
 
   loginForm= this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]


})
ngOnInit(): void {
}

login(){
  if(this.loginForm.valid){
  var uname=this.loginForm.value.uname;
  var pswd=this.loginForm.value.pswd;
  this.ds.login(uname,pswd)
  
  .subscribe((result:any)=>{
    console.log(result);
    
    localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
    localStorage.setItem('currentEmail',JSON.stringify(result.currentEmail));

          alert(result.message);
          this.router.navigateByUrl('home')
          
    },
     result=>{
        alert(result.error.message)
      }) 
    }
   
  }
}