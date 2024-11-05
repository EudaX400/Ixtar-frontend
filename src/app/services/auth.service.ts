import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { register } from 'module';
import { BehaviorSubject, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://ixtar-backend.up.railway.app/api/auth/';

  private isLoggedInSubject = new BehaviorSubject<boolean>(
    this.isAuthenticated()
  );
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

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
    return this.http
      .post(`${this.apiUrl}login`, credentials, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .pipe(
        tap((response: any) => {
          if (typeof window !== 'undefined') {
            localStorage.setItem('token', response.token);
            this.isLoggedInSubject.next(true);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }

  isAuthenticated(): boolean {
    return typeof window !== 'undefined' && !!localStorage.getItem('token');
  }

  getUserProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
        console.error('No token found');
        return throwError(() => new Error('Token is missing'));
    }
    console.log(`Token sent in request: ${token}`);
    return this.http.get(`${this.apiUrl}profile`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
}
}
