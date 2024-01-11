import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router,){

  }
 showPwd:any
 singupUsers: any[]=[];
 passwordtoggle(){
  this.showPwd=!this.showPwd; 
 }
  
  // 定義用於註冊表單的對象
  signupObj: any = {
    username: '',
    email: '',
    password: ''
  };
  onSignup() {
    const { username, email, password } = this.signupObj;

    // 基本的表单验证
    if (!username || !email || !password) {
      console.error("Please provide username, email, and password");
      return;
    }

    // 调用 AuthService 进行注册
    this.authService.signup(username, email, password).subscribe({
      next: (data: any) => {
        console.log("Signup successful");
        this.router.navigate(['/login']);  // 注册成功后的路由
      },
      error: (error: any) => {
        console.error("Signup failed");
      }
    });
  }
   nuOnit(): void{
  const localData = localStorage

 }

 



}

