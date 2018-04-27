import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {
   isLoggedIn: boolean = false;
   constructor(private http: HttpClient) {}
   redirectUrl: string;

  login(data) {
  return this.http.post(environment.BASE_URL + '/user-login/', data).map(res => res);
  }
  forgotPassword(data) {
  return this.http.post(environment.BASE_URL + '/user-forgot/', data).map(res => res);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
