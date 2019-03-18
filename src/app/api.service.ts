import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     // 'Content-Type': 'application/json',
//     'X-RapidAPI-Key': '8b500cd2b4mshc3f4c53063c9c75p17a640jsn4885cb6dd44c',
//     'Authorization': '12345'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  loadImage(url: string): Observable<any> {
    // return this.http.get(url, httpOptions);
    return this.http.get(url);
    // console.log(result.status, result.headers, result.body);
  }

}
