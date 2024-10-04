import { KanbanTask } from './task.interface';

export interface KanbanList {
  id: number;
  title: string;
  tasks: KanbanTask[];
}