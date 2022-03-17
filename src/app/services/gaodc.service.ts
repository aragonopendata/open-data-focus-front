import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Constants } from '../app.constants';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

// This Injectable make the calls to the api
@Injectable()
export class GaodcService {
  serverURL: string;
  constructor(private router: Router, private http: Http) {
    this.serverURL = Constants.VISUAL_BACK_SERVER_URL;
  }

  // Make the call to get the list of all packages
  getPackageList() {
    const headers = new Headers();
    // headers.append('Access-Control-Allow-Origin','*');
    headers.append('Content-Type', 'application/json');
    return this.http
      .get(this.serverURL + '/services/gaodc/packageList', { headers: headers })
      .map(res => {
        return res.json();
      })
      .catch(err => {
        return Observable.throw('errorConexion');
      });
  }

  // Make the call to get all the package iniformation
  getPackageInfo(data: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const body = JSON.stringify({ packages: data });
    return this.http
      .get("https://opendata.aragon.es/GA_OD_Core/preview?view_id="+data)
      // , body, {
      //   headers: headers
      // })
      .map(res => {
        return res.json();
      })
      .catch(err => {
        return Observable.throw('errorConexion');
      });
  }
}
