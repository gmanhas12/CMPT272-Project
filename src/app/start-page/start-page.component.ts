import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {
  constructor(private router:Router){
    
  }
  editPig(){
    this.router.navigate(['/edit'])
  }
  
  createReport(){
    this.router.navigate(['/create'])
  }
}


// add more info and edit pages here
//dereict more info page to a delete pafe without buttona