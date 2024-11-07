import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectModalComponent } from "../../project/project-modal/project-modal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showModal = false;
  constructor(private router: Router, private projectService: ProjectService) {}

  openProjectModal(){
    this.showModal = true;
  }

  handleProjectModal(projectData: any){
    this.showModal = false;

    if(projectData){
      this.projectService.createProject(projectData).subscribe({
        next:(createdProject) => {
          this.router.navigate(['/project', createdProject.id]);
        },
        error:(error) => {
          console.error('Error creating project', error);
        }

      })
    }
  }

}
