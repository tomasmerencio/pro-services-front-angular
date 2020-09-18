import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private baseUrl = 'http://localhost:9000/api';
  
  constructor(private http: HttpClient) { }

  prestador(id: number) {
    let url = this.baseUrl + "/prestador/" + id;
    return this.http.get(url);
  }
}
