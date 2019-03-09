import { Component, OnInit } from '@angular/core';
import { Group, Task } from './entities/entities';
import { GroupService } from './group.service';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  groups: Group[];
  user = 'louis';
  constructor(private groupService: GroupService, private taskService: TaskService) {}

  getGroups(): void {
    this.groupService.getGroups()
    .subscribe(result => {
      this.groups = result;
    });
  }

  doTask(idTask: number) {
    this.taskService.doTask(idTask, this.user)
    .subscribe(result => window.location.reload());
  }

  ngOnInit() {
    this.getGroups();
  }

}
