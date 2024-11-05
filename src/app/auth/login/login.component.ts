import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.snackBar.open('Inicio de sesión exitoso!', 'Cerrar', { duration: 3000 });
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        if (error.status === 403) {
          this.snackBar.open('Credenciales incorrectas', 'Cerrar', { duration: 3000 });
        } else {
          this.snackBar.open('Ocurrió un error en el inicio de sesión', 'Cerrar', { duration: 3000 });
        }
      },
    });
  }
}
