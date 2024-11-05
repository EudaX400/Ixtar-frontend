import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { error } from 'node:console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  user = { username: '', password: '', email: '' };

  repeatPassword: string = '';
  passwordMismatch: boolean = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.user.password !== this.repeatPassword) {
      this.passwordMismatch = true;
      return;
    } else {
      this.passwordMismatch = false;
    }
    console.log("Datos enviados desde el frontend:", this.user); 
    this.authService.register(this.user).subscribe({
      complete: () => {
        this.user = { username: '', password: '', email: '' };
        this.repeatPassword = '';
        this.passwordMismatch = false;
        console.log('Registration completed');
      },
      error: (error) => {
        console.error('Error registering user', error);
        if (error.status === 400) {
          console.error('Invalid credentials provided');
        } else {
          console.error('An error occurred while registering the user');
        }
      },
    });
  }
}
