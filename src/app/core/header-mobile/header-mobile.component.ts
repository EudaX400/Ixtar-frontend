import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

  @Input() showMenuMobile: boolean = false;  
  @Output() toggleMenuMobile = new EventEmitter<void>();  

  onCloseMenu() {
    this.toggleMenuMobile.emit(); 
  }
  
  constructor(private router: Router) {}
  goToProject() {
    this.router.navigate(['/project']); 
  }
  
  goToHome() {
    this.router.navigate(['/home']);
  }

  showOptions = false;

  toggleOptions() {
    this.showOptions =!this.showOptions;
  }

}
