import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../interfaces/task.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent{
    @Input()
    public task!: Task;
    @Output()
    public onDeleteTask = new EventEmitter<Task>();
    @Output()
    public onToggleTask = new EventEmitter<Task>();

    public onDelete(task: Task) {
        this.onDeleteTask.emit(task);
    }

    public onToggle(task: Task) {
        task.complete = !task.complete;
        this.onToggleTask.emit(task);
    }
}
