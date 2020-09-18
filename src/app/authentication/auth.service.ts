import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://sso.sistemadual-ahk.com.ar/publi/api';
  token;

  constructor(private http: HttpClient) { }

  private sendLoginRequest(username: string, password: string) {
    let uri = this.baseUrl + "/login";
    return this.http.post(uri, {
      username: username,
      password: password
    }, {responseType: 'json'}).toPromise();
  }

  tryLogin(username: string, password: string) {
    const result = this.sendLoginRequest(username, password)
    .then((response: any) => {
      let realResponse = false;
      if(response.error === 0) {
        localStorage.setItem('jwt', response.jwt);
        realResponse = true;
      }
      return realResponse;
    }).catch(() => {return false;});
    
    return true;
  }
}
