import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(obj: User): Observable<IUserModel> {
    return this.http.post<IUserModel>('https://api.freeprojectapi.com/api/SmartParking/login', obj)
  }
}
