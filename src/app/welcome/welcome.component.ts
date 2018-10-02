import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  resturantBtn(){
    this.router.navigateByUrl("home");
    console.log("resturant clicked");
  }

  groceryBtn(){
    this.router.navigateByUrl("home");
    console.log("grocery clicked");
  }

}
