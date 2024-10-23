import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  user = {username: "", password: ""};

  constructor(private authService: AuthService) {}
  
  onSubmit() {
    this.authService.register(this.user).subscribe(response => {
      console.log('User registered successfully', response);
    });
  }

}
