import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Group, Task } from './entities/entities';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl = 'http://localhost:3000/task';
  private doTaskUrl = '/do';

  constructor(private http: HttpClient) { }

  doTask(taskId, user): Observable<Object> {
    const body = {
      'id': taskId,
      'user': user
    };
    console.log(body);
    return this.http.post<Object>(this.taskUrl + this.doTaskUrl, body);
  }
}
