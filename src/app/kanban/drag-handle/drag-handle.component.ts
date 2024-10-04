import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-drag-handle',
  standalone: true,
  imports: [],
  template: `
    <img
    src="assets/icons/drag_indicator_rounded.svg"
    alt="drag"
    role="button"
  />`
  ,
  styles: [
    `
      img {
        position: relative;
        cursor: move;
        top: 4px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragHandleComponent {
  constructor() {}
}
