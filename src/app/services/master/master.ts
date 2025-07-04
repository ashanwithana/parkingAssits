import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseModel } from '../../models/res.model';
import { UserService } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class Master {

  userService = inject(UserService)

  constructor(private http: HttpClient) { }

  getSitesByClientId(): Observable<IResponseModel> {
    const clientId = this.userService.loggedUserData.extraId
    return this.http.get<IResponseModel>('https://api.freeprojectapi.com/api/SmartParking/GetSitesByClientId?id=' + clientId)
  }
}
