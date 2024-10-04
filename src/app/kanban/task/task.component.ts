import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KanbanTask } from '../model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: KanbanTask;
  @Output() readonly updateDescription = new EventEmitter<string>();
  @Output() readonly remove = new EventEmitter<void>();

  constructor() {}

  descriptionUpdated(newDescription: string): void {
    if (newDescription !== this.task.description) {
      this.updateDescription.emit(newDescription);
    }
  }
}
