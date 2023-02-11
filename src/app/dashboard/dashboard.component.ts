import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';



// import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  submitted = false;
  constructor(private fb:FormBuilder,private ds:DataService, private router:Router) { }
     displayForm= this.fb.group({
    fullname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    coursename:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    phonenumber:['',[Validators.required,Validators.pattern('[0-9]*')]],
    address:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    city:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    radio:['',[Validators.required]],
    



})

  ngOnInit(): void {
  }
 
  get check() {
    return this.displayForm.controls;
  }
  Onsubmit(){
    this.submitted=true
     if (this.displayForm.invalid){
      return;
     }
  }

  display(){
    if(this.displayForm.valid){
      var fullname=this.displayForm.value.fullname;
      var coursename=this.displayForm.value.coursename;
      var email=this.displayForm.value.email;
      var phonenumber=this.displayForm.value.phonenumber;
      var address=this.displayForm.value.address;
      var city=this.displayForm.value.city;

      this.ds.display(fullname,coursename,email,phonenumber,address,city).subscribe(
      
        (result:any) => {
          alert(result.message)
          this.router.navigateByUrl('/view')


      },(result:any)=>{
        alert(result.error.message)

      }
      )






    }





  }
}
