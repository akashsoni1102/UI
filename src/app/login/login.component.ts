import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private user:User) {
    
   }

  ngOnInit(): void {
  }

  username:string;
  password:string;
  msg:string;

  validate(){
    this.user.username=this.username;
    this.user.password=this.password;
    
    if(this.authService.handleLogin(this.user)==false)
{
    this.msg="Incorrect Username/Password";
  }
  }
  
  

}
