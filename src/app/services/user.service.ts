import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL ='https://api.escuelajs.co/api/v1/users';
  constructor(private http:HttpClient) {}
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiURL);
    
  }
}
