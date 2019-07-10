import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addToNumber(a: number =0,b: number =0): number{
    return a+b;
  }
  // 사용자 전체
  getAllUser(){
   this.http.get('https://jsonplaceholder.typicode.com/posts/5')
    .subscribe( function (res) {
      console.log(res);
    })
  }
  // 사용자 상세
  getUserDetail(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/5');

  }
  // 등록
  // 수정
  // 삭제
}
