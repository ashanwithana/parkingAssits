import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Master {

  constructor(private http: HttpClient) { }

  getSitesByClientId(){
    return this.http.get('https://api.freeprojectapi.com/api/SmartParking/GetSitesByClientId?id=1')
  }
}
