import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userData: any;

  constructor(private http: HttpClient) {}

  apiURL: string = 'http://localhost:8080/unfold-api/api/';

  sendRequestWithMedia(endpoint: string, data: any): Observable<Status> {
    return this.http.post<Status>(this.apiURL + endpoint, data);
  }

  sendRequestWitoutMedia(endpoint: string, data: any, headers: any = null): Observable<Status> {
    return this.http.post<Status>(this.apiURL + endpoint, JSON.stringify(data), {headers});
  }

  getRequest(endpoint: string) {
    const result = this.http.get(this.apiURL + endpoint);
    return result;
  }

  deleteRequest(endpoint: string, data: any): Observable<any> {
    // Construct query parameters from the data object
    let params = new HttpParams();

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.append(key, data[key]);
      }
    }

    return this.http.delete<any>(`${this.apiURL}${endpoint}`, {
      params: params 
    });

  }
}
