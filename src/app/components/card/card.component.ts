import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DisabledInputComponent } from '../disabled-input/disabled-input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



interface UserData {
  id:number
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DisabledInputComponent,ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
constructor(
  private router:Router,
  private route: ActivatedRoute
  ){

}



  @Input() userData!: UserData ;
  @Input() visibility!: boolean ;



 handelProfile(){
  console.log(this.userData.id)
  this.router.navigateByUrl(`profile/${this.userData.id}`)

 }

}
