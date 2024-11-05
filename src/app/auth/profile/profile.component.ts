import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  user = { email: '', username: '', created_at: '' };
  

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.authService.getUserProfile().subscribe(
        (data) => {
          this.user.email = data.email;
          this.user.username = data.username;
          this.user.created_at = data.created_at;
        },
        (error) => {
          console.error('Error al cargar el perfil', error);
        }
      );
    }
  }

  onLogout() {
    this.authService.logout();
  }
}