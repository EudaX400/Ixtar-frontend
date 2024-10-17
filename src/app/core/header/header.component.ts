import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderMobileComponent } from "../header-mobile/header-mobile.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenuMobile = false;
toggleMenuMobile() {
  this.showMenuMobile =!this.showMenuMobile;
}
  constructor(private router: Router) {}
goToProject() {
  this.router.navigate(['/project']); 
}

goToHome() {
  this.router.navigate(['/home']);
}

}
