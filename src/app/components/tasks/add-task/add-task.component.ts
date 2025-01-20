import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../interfaces/task.interface';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent{
    public showForm: boolean = false;
    public name: string = "";
    public category: string = "default";
    public complete: boolean = false;
    @Output()
    public onSubmitTask = new EventEmitter();

    public onToggle() {
        this.showForm = !this.showForm;
    }

    public onSubmit() {
        if(this.validForm()) {
            alert('Preencha todo o formulário!');
            return;
        }

        let newTask = this.makeTask();
        this.onSubmitTask.emit(newTask);

        this.name = "";
        this.category = "default";
    }

    private validForm(): boolean {
        if(this.name.length == 0){
            return true;
        }
        if(this.category == "default") {
            return true;
        }

        return false;
    }

    private makeTask(): Task {
        return {
            name: this.name,
            category: this.category,
            complete: this.complete
        }
    }
}
