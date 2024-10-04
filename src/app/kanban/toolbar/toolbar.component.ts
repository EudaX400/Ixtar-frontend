import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports:[],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  get canUndo(): boolean {
    return false;
  }
  get canRedo(): boolean {
    return false;
  }

  constructor() {}

  undo(): void {}
  redo(): void {}
}