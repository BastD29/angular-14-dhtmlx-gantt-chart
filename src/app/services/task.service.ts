import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable, catchError, firstValueFrom, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HandleError } from './service-helper';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // get(): Promise<Task[]> {
  //   return Promise.resolve([
  //     {
  //       id: 1,
  //       text: 'Task #1',
  //       start_date: '2023-04-15 00:00',
  //       duration: 3,
  //       progress: 0.6,
  //       parent: 0,
  //     },
  //     {
  //       id: 2,
  //       text: 'Task #2',
  //       start_date: '2023-04-18 00:00',
  //       duration: 3,
  //       progress: 0.4,
  //       parent: 0,
  //     },
  //   ]);
  // }

  // get(): Observable<Task[]> {
  //   return of([
  //     {
  //       id: 1,
  //       text: 'Task #1',
  //       start_date: '2023-04-15 00:00',
  //       duration: 3,
  //       progress: 0.6,
  //       parent: 0,
  //     },
  //     {
  //       id: 2,
  //       text: 'Task #2',
  //       start_date: '2023-04-18 00:00',
  //       duration: 3,
  //       progress: 0.4,
  //       parent: 0,
  //     },
  //   ]);
  // }

  private taskUrl = 'api/tasks';

  constructor(private http: HttpClient) {}

  // get(): Promise<Task[]> {
  //   return firstValueFrom(this.http.get(this.taskUrl)).catch(HandleError);
  // }

  get(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl).pipe(catchError(HandleError));
  }

  insert(task: Task): Observable<Task> {
    return this.http
      .post<Task>(this.taskUrl, task)
      .pipe(catchError(HandleError));
  }

  update(task: Task): Observable<void> {
    return this.http
      .put<Task>(`${this.taskUrl}/${task.id}`, task)
      .pipe(catchError(HandleError));
  }

  remove(id: number): Observable<void> {
    return this.http
      .delete<Task>(`${this.taskUrl}/${id}`)
      .pipe(catchError(HandleError));
  }
}
