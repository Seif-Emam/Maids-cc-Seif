import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Url = 'https://reqres.in/api/users'
  constructor(private http:HttpClient) {

   }
   getAllUser(page:string){
    let url = `${this.Url}?page=${page}`;
    return this.http.get(url)
   }

   getUser(id: string) {
    let url=`${this.Url}/${id}`;
    return this.http.get(url)
    };
  }

