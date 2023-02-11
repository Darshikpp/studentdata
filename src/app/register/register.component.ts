import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  uname="";
  email="";
  pswd="";


  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  } 

  registerForm= this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    email:['',[Validators.required,Validators.email]]

  })



    // register clicked 
    register(){
      console.log(this.registerForm);//valid or not
      
       var uname=this.registerForm.value.uname;
       
       var pswd=this.registerForm.value.pswd;
       var email=this.registerForm.value.email;
       if(this.registerForm.valid){
  
        // console.log(this.registerForm.get('uname')?.errors);
        this.ds.register(uname,pswd,email)
        .subscribe((result:any)=>{
          alert(result.message);
          this.router.navigateByUrl('')
          
    },
      result=>{
        alert(result.error.message)
      })
    }
   
     }
}
