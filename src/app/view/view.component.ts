import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  studentsDetails:any =[];
  router: any;

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.getStudentDetails()
  
  }
  



  getStudentDetails(){
    this.ds.getStudentDetails().subscribe(
      (result:any) => {
        this.studentsDetails = result.studentsDetails;
      },(result:any) => {
        alert(result.error.message)
      })
  }


  
}
 