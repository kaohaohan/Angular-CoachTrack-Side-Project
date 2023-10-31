import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router,){

  }
 showPwd:any
 singupUsers: any[]=[];
 passwordtoggle(){
  this.showPwd=!this.showPwd; 
 }
 loginObj:any={
  username: '',
  password: '',
 }

 onLogin(){
  const {username, password} = this.loginObj;

  if(!username || !password){
    console.error("Please provide username and password");
    return;
  }

  this.authService.login(username,password).subscribe(
    {
      next: (data:any)=>{
        console.log("login sucessful");
          this.router.navigate(['/']);
      },
      error: (error:any)=>{
        console.error("login failed");
      }
    }
  )

 }


 nuOnit(): void{
  const localData = localStorage

 }

 

}
