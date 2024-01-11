import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // 发送登录请求到后端 API
    return this.http.post('http://localhost:3000/api/v1/login', { username, password });

  }
  signup(username: string, password: string, email: string): Observable<any>{
    //發送登入請求API
    return this.http.post('http://localhost:3000/api/v1/register',{username, password,email });
  }
  updateRole(role: string) {
    // 替换为您的 API 端点
    return this.http.post('http://localhost:3000/users/role', { role });
  }
    // Add your method for coach
    getCoachBasicInfo() {
      return this.http.get('http://localhost:3000/api/users/coach/basicinfo');
    }
  
    // Add your method for student
    getStudentBasicInfo() {
      return this.http.get('http://localhost:3000/api/users/student/basicinfo');
    }
}