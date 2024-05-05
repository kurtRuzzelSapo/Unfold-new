import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  apiURL: string = 'http://localhost/Unfold-API/api/';

  sendRequest(endpoint: string, data: any): Observable<Status> {
    return this.http.post<Status>(this.apiURL + endpoint, JSON.stringify(data));
  }

  getRequest(endpoint: string) {
    const result = this.http.get(this.apiURL + endpoint);
    return result;
  }
}
