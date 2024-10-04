import { CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { KanbanList } from '../model';

@Component({
  selector: 'app-list-tasks-wrapper',
  standalone: true,
  imports: [DragDropModule, CdkDropList],
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        width: 100%;
        min-height: 50px;
      }
    `,
  ],
})
export class ListTasksWrapperComponent {
  @Input() cdkDropListData!: KanbanList;  // Agregamos el Input para cdkDropListData
}
