import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  credentials = {username: "", password: ""};

  constructor(private authService: AuthService) {}

  onSubmit() {
      this.authService.login(this.credentials).subscribe(response => {
        console.log('Token received', response.token);
        localStorage.setItem('token', response.token); 
      });
      }

}
