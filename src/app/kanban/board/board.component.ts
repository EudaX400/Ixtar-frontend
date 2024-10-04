import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { KanbanBoard, KanbanList, KanbanTask } from '../model';
import { KanbanStateService } from '../state.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ListComponent } from '../list/list.component';
import { DragHandleComponent } from '../drag-handle/drag-handle.component';
import { ListTasksWrapperComponent } from '../list-tasks-wrapper/list-tasks-wrapper.component';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ToolbarComponent, ListComponent, DragHandleComponent, ListTasksWrapperComponent, TaskComponent, DragDropModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [KanbanStateService],
})
export class BoardComponent implements OnInit {
  board: KanbanBoard | undefined;

  constructor(private kanbanService: KanbanStateService) {}

  ngOnInit(): void {
    this.board = this.kanbanService.board;
  }

  trackById(index: number, element: KanbanList | KanbanTask): number {
    return element.id;
  }

  addTaskToList(list: KanbanList): void {
    this.kanbanService.addTaskToList(list);
  }

  updateTitleInList(list: KanbanList, newTitle: string): void {
    this.kanbanService.updateListTitle(list, newTitle);
  }

  removeList(list: KanbanList): void {
    this.kanbanService.removeList(list);
  }

  moveList(dropEvent: CdkDragDrop<any>): void {
    const { previousIndex, currentIndex } = dropEvent;
  
    if (previousIndex === currentIndex) {
      return;
    }
  
    this.kanbanService.moveList(previousIndex, currentIndex);
  }

  removeTaskFromList(list: KanbanList, taskIndex: number): void {
    this.kanbanService.removeTaskFromList(list, taskIndex);
  }

  updateTaskDescription(task: KanbanTask, newDescription: string): void {
    this.kanbanService.updateTask(task, newDescription);
  }

  moveTask(dropEvent: CdkDragDrop<KanbanList>): void {
    const { previousContainer, container, previousIndex, currentIndex } = dropEvent;
    const isSameContainer = previousContainer === container;
  
    if (isSameContainer && previousIndex === currentIndex) {
      return;
    }
  
    if (isSameContainer) {
      this.kanbanService.reorderTask(container.data, previousIndex, currentIndex);
    } else {
      this.kanbanService.transferTask({
        fromList: previousContainer.data,
        toList: container.data,
        fromIndex: previousIndex,
        toIndex: currentIndex,
      });
    }
  }
}
