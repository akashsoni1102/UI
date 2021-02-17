import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private user:User,private router:Router) {
    
   }

  ngOnInit(): void {
  }


  isLoggedIn:boolean;

  username:string;
  password:string;
  msg:string;
  
  print(){
    this.user.username=this.username;
    this.user.password=this.password;
    
   this.http.post("http://localhost:9090/login",this.user)
   .subscribe((response)=>{
  this.router.navigate(["/home"]);
  },
   (error)=>{this.msg="Incorrect Username/Password";
              console.log("Invalid Credentials")});

  }

  
  

}
