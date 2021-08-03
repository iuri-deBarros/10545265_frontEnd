import { Injectable } from '@angular/core';

import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl: string;
  constructor() { 
    this.apiUrl = "http://20.52.203.66"
  }

  serverCall(method: string, endpoint: string, data:any, callback:any){
    $.ajax({
      url: this.apiUrl+endpoint,
      method: method,
      data: JSON.stringify(data),
      contentType: "application/json",
      xhrFields: {withCredentials: true},
      success: function(data: any){
        callback(data);
      }
    });
  }
}
