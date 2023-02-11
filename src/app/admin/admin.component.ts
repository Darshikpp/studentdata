import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  adminCredantials = {
    uname:"rahul",
    pswd:"rahul"
  }

   
  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) { }

  adminForm= this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]


})
  ngOnInit(): void {
  }
  adminlogin(){ 
    if(this.adminForm.valid){
    let uname=this.adminForm.value.uname;
    let pswd=this.adminForm.value.pswd;
    let adminUname = this.adminCredantials.uname
    let adminPswd = this.adminCredantials.uname
    
    if( adminUname == uname && adminPswd == pswd ){
      alert('Admin Login Successfull')
      this.router.navigateByUrl('view')


    }else{
      alert('Invalid data')

    }
  }
}
}