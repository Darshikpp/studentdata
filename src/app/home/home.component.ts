import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('currentEmail')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    localStorage.removeItem('currentAcno')

    alert('Logout Works')
    this.router.navigateByUrl('')
  }

}
 