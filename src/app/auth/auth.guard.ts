import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isBrowser()) {  // Verifica si estás en el navegador
      const token = localStorage.getItem('token');
      if (token) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      return false; // En el servidor no puedes autenticar
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
