import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Group, Task } from './entities/entities';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groupUrl = 'http://localhost:3000/group';

  constructor(private http: HttpClient) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupUrl);
  }
}
