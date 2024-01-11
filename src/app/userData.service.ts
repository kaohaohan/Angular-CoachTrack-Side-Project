import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) {}

  // 教練列表
  getCoachesList(): Observable<any> {
    return this.http.get('http://localhost:3000/api/v1/coachesList');
  }

  // 學生列表
  getStudentsList(): Observable<any> {
    // 替换为您的 API 端点
    return this.http.get('http://localhost:3000/api/v1/studentsList');
  }
}