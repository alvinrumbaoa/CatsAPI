import { Injectable } from '@angular/core';
import { HttpClient ,HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatsInformation } from './Cats'
@Injectable({
  providedIn: 'root',
 

})
export class CatsService {
  constructor(private http: HttpClient) {}

  public getCats(): Observable<CatsInformation> {
    const url = 'https://api.thecatapi.com/v1/images/search/';
    return this.http.get<CatsInformation>(url);
}
}

