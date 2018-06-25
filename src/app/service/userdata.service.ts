import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private apiUrl = 'http://www.mocky.io/v2/5b2b5bde3000006200234596';
  constructor(private http: Http) {
   this.getData();
  }
  getData() {
    return this.http.get(this.apiUrl)
      .map((response: Response) => {
          return response.json();
      });
  }
}
