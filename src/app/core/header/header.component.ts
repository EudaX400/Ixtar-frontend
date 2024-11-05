import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderMobileComponent } from "../header-mobile/header-mobile.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenuMobile = false;
  isLoggedIn = false;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  toggleMenuMobile() {
    this.showMenuMobile = !this.showMenuMobile;
  }

  goToProject() {
    this.router.navigate(['/project']); 
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

}
