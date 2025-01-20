import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    private api: string = 'http://localhost:3000/tasks';

    constructor(private httpClient: HttpClient) {}

    public findAll(): Observable<Array<Task>> {
        return this.httpClient.get<Array<Task>>(this.api);
    }

    public insert(task: Task): Observable<Task> {
        return this.httpClient.post<Task>(this.api, task);
    }

    public update(task: Task): Observable<Task> {
        return this.httpClient.put<Task>(`${this.api}/${task.id}`, task);
    }

    public delete(task: Task): Observable<Task> {
        return this.httpClient.delete<Task>(`${this.api}/${task.id}`);
    }
}
