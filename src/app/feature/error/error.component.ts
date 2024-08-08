import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  constructor(
    private router:Router
  ){

  }


  handleError(){
    console.log("clicked")
    this.router.navigateByUrl('home')
  }
}
