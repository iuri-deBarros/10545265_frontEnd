import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/services/advert-service/advert.service';
import { ApiService } from 'src/app/services/api-service/api.service';

import {faPlus} from "@fortawesome/free-solid-svg-icons";
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {
  faPlus = faPlus;
  public adverts: any = [];
  constructor(public advertService: AdvertService, public api: ApiService, public app: AppComponent) { 
    let that = this;
    this.advertService.getAllAdverts((data: any)=>{

      that.adverts = data;
    });
  }

  ngOnInit(): void {
  }

  getDateTime(date: string) {
    let dateObj = new Date(date);
    let day = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let monthString = (month < 9) ? "0" + month : month;
    let year = dateObj.getFullYear();
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;
    let hoursString = hours < 10 ? '0' + hours : hours;
    let minutesString = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hoursString + ':' + minutesString + ' ' + ampm;

    return day + "/" + monthString + "/" + year + " " + strTime;
  }

}
