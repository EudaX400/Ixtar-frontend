import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  @Output() projectCreated = new EventEmitter<any>();
  projectForm: FormGroup;


  constructor(private fb: FormBuilder,private projectService: ProjectService,  // Inyecta el servicio
    private router: Router) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      type: [''],
      company: [''],
      finishAt: ['']
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      // Llama al servicio para crear el proyecto
      this.projectService.createProject(this.projectForm.value).subscribe({
        next: (project) => {
          // Emite el evento y navega a la URL del proyecto recién creado
          this.projectCreated.emit(project);
          this.router.navigate(['/projects', project.id]);  // Ajusta según la estructura de tu URL
        },
        error: (err) => {
          console.error('Error al crear el proyecto:', err);
        }
      });
    }
  }

  closeModal() {
    this.projectCreated.emit(null);
  }

}
