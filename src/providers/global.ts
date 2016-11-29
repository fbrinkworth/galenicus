import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Global provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Global {
  apiURL: string;

  constructor(public http: Http) {
    this.apiURL = "https://gsk-mydoc-uat-bup.appspot.com";
  }

  getApiURL() {
    return this.apiURL;
  }
}
