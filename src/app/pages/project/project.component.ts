import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';  // Import para Drag & Drop
import { HeaderProjectComponent } from "../../core/header-project/header-project.component";
import { DetailsComponent } from "../../project/details/details.component";
import { IdeasComponent } from "../../project/ideas/ideas.component";
import { FormsModule } from '@angular/forms';
import { BoardComponent } from "../../kanban/board/board.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [HeaderProjectComponent, DetailsComponent, IdeasComponent, FormsModule, DragDropModule, BoardComponent],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  selectedSection: string = 'manage';  // Estado inicial para la sección
  newTask: string = '';               // Nueva tarea
  newTaskSection: string = '';         // Control para la nueva tarea en columnas específicas
  projectId: string | null = null;

  // Definir las tareas
  tasks: { [key: string]: string[] } = {
    todo: ['Tarea 1', 'Tarea 2'],
    inProgress: ['Tarea 3'],
    done: ['Tarea 4']
  };

  constructor(private route: ActivatedRoute) { }  // Inyecta ActivatedRoute para obtener el projectId de la URL

  ngOnInit() {
    // Obtiene el projectId de la URL
    this.projectId = this.route.snapshot.paramMap.get('id');
    
    // Aquí puedes llamar a un servicio para obtener los detalles del proyecto con projectId
    // this.projectService.getProject(this.projectId).subscribe(project => { ... });
  }

  // Método para manejar el cambio de sección (ideas, details, etc.)
  onSectionChange(section: string) {
    this.selectedSection = section;
  }

  // Añadir una nueva tarea a la sección específica
  addTask(section: string) {
    this.newTaskSection = section;
  }

  // Guardar la tarea en la columna correcta
  saveTask(section: 'todo' | 'inProgress' | 'done') {
    if (this.newTask.trim()) {
      this.tasks[section].push(this.newTask);  // Corregimos el error de index
      this.newTask = '';  // Limpiar el campo de tarea
      this.newTaskSection = '';  // Ocultar el input de nueva tarea
    }
  }

  // Manejo de arrastrar y soltar entre columnas
  onDrop(event: CdkDragDrop<string[]>, section: 'todo' | 'inProgress' | 'done') {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
