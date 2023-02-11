import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }



  
  userDetails:any = {

  }
  register(uname:any, pswd:any, email:any){

    const data ={
        uname,
        pswd, 
        email
    }
     return this.http.post('http://localhost:3000/register', data)

  }

  

  login(uname:any, pswd:any){

    const data ={
        uname,
        pswd
        
    }
     return this.http.post('http://localhost:3000/login', data)

  }



display(fullname:any,coursename:any,email:any,phonenumber:any,address:any,city:any){
  const data ={
    fullname,
    coursename,
    email,
    phonenumber,
    address,
    city
  } 
  return this.http.post('http://localhost:3000/studentregistration', data)
}


getStudentDetails(){
  return this.http.get('http://localhost:3000/view')
}


// adminlogin(uname:any, pswd:any){

//   const data ={
//       uname,
//       pswd
      
//   }
//    return this.http.post('http://localhost:3000/admin', data)
 
// }


}
