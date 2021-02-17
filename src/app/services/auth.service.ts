import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }


  handleLogin(user:User):boolean{
    this.http.post("http://localhost:9090/login",user)
    .subscribe((response)=>{
   this.router.navigate(["/home"]);
   sessionStorage.setItem('isLoggedIn','true');
   sessionStorage.setItem('username',user.username);
   
   },
    (error)=>{console.log("Invalid Credentials");
               });
               if(sessionStorage.getItem('isLoggedIn'))
               return true;
               else return false;
  }

}
