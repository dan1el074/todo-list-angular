import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CommonModule, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit{
    public taskList!: Array<Task>;

    constructor(private TasksService: TasksService) {}

    public ngOnInit(): void {
        this.TasksService.findAll().subscribe(result => {
            this.taskList = result;
        });
    }

    public onDeleteTask(task: Task) {
        this.TasksService.delete(task).subscribe(() => {
            let index = this.taskList.findIndex(currentTask => currentTask.id == task.id)
            this.taskList.splice(index, 1);
        });
    }

    public onToggleTask(task: Task) {
        this.TasksService.update(task).subscribe();
    }

    public onSubmit(task: Task) {
        this.TasksService.insert(task).subscribe(() => {
            this.ngOnInit();
        });
    }
}
