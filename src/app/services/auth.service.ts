import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { register } from 'module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://ixtar-backend.up.railway.app/api/auth/';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}register`, user, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}login`, credentials, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }
}
