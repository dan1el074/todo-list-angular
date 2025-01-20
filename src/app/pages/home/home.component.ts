import { Component } from '@angular/core';
import { TasksComponent } from '../../components/tasks/tasks.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    public title!: string;

    constructor() {
        this.title = "Tarefas";
    }
}
