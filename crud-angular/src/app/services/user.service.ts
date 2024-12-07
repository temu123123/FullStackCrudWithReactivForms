import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private apiUrl = 'http://localhost:8080'

  constructor(private http:HttpClient) { }

  postUser(user:any):Observable<any> {
    return this.http.post(this.apiUrl + "/api/user", user);
  }

  getAllUsers(): Observable<any>{
    return this.http.get(this.apiUrl + "/api/users")
  }

  deleteUser(id:any): Observable<any>{
    return this.http.delete(this.apiUrl + `/api/user/${id}`)
  }

  updateUser(id:number, user:any): Observable<any>{
      return this.http.put(this.apiUrl + `/api/user/${id}`, user)
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(this.apiUrl + `/api/user/${id}`)
  }

}
