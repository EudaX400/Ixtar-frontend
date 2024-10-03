import { Component } from '@angular/core';
import { HeaderProjectComponent } from "../../core/header-project/header-project.component";
import { DetailsComponent } from "../../project/details/details.component";
import { IdeasComponent } from "../../project/ideas/ideas.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [HeaderProjectComponent, DetailsComponent, IdeasComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  selectedSection: string = 'ideas';  // Estado inicial

  onSectionChange(section: string) {
    this.selectedSection = section;
  }

}
