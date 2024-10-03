import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-project',
  standalone: true,
  imports: [],
  templateUrl: './header-project.component.html',
  styleUrl: './header-project.component.scss'
})
export class HeaderProjectComponent {
  @Output() sectionChanged = new EventEmitter<string>();

  changeSection(section: string) {
    this.sectionChanged.emit(section); // Emitir el cambio de sección
  }
}
