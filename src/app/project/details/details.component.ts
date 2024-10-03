import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
    project = {
      name: 'Nombre del proyecto',
      description: 'Descripción del proyecto'
    };
  
    saveDetails() {
      // Lógica para guardar los detalles del proyecto
      console.log('Detalles guardados:', this.project);
    }
}
