import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserModel, User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  loggedUserData!: IUserModel;

  constructor(private http: HttpClient) {
    const userData = localStorage.getItem("parkingAssistUser");
    if (userData !== null) {
      this.loggedUserData = JSON.parse(userData)
    }
  }

  loginUser(obj: User): Observable<IUserModel> {
    return this.http.post<IUserModel>('https://api.freeprojectapi.com/api/SmartParking/login', obj)
  }
}
