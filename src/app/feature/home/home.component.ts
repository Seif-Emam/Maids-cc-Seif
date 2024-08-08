import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../components/card/card.component';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    CardComponent,
  ],
  providers: [UserService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(
    private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  isLoading:boolean=false
  allUsers: any;
  filterUsers:any;
data:any
  ngOnInit() {

   this.getAllUsers("1")
  }

  getAllUsers(page:string){
    this.isLoading=true
    this.UserService.getAllUser(page)?.subscribe({
      next: (res: any) => {
        this.allUsers = res.data
        this.data = res.data
        console.log(this.allUsers)
        this.isLoading=false
      },
      error: (err) => console.error('Error fetching data:', err),
    });
  }
  formGroup = new FormGroup({
    searchValue: new FormControl(''),

  })


  handelSearch = () => {
    const searchValue = this.formGroup.get('searchValue')?.value;
    if(searchValue){
      this.filterUsers = this.allUsers?.filter((user: { id: number; }) => user.id === +searchValue);
      this.allUsers=this.filterUsers
    }else{
      this.allUsers=this.data
    }
    
    console.log(searchValue)
  }


}
