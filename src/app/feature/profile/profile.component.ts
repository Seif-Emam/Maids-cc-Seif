import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
constructor(
  private userService:UserService,
 private rout:ActivatedRoute,
 private router:Router
){

}
isLoading:boolean = false;
userData:any
userId:any
  ngOnInit() {
    const userId=this.rout.snapshot.paramMap.get("id");
    this.rout.params.subscribe((res)=>{
      this.userId=res["id"]
    })
   this.getUser(Number(userId))
  }
  
  getUser(id:any){
    this.isLoading=true
    this.userService.getUser(id)?.subscribe({
      next: (res: any) => {
        this.userData = res.data
        console.log(this.userData)
        this.isLoading=false

      },
      error: (err) => console.error('Error fetching data:', err),
    });
  }
  handleBack(){
    this.router.navigateByUrl('home')
  }

}
