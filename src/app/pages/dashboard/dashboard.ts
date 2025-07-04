import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../services/master/master';
import { IResponseModel } from '../../models/res.model';
import { ISite } from '../../models/site.model';
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  siteList: ISite[] = [];
  masterService = inject(Master)

  ngOnInit(): void {
    this.getSites()
  }

  getSites() {
    return this.masterService.getSitesByClientId().subscribe((res: IResponseModel) => {
      this.siteList = res.data;
    })
  }

}
