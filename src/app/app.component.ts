import { Component, OnInit } from '@angular/core';
import { Group, Task } from './entities/entities';
import { GroupService } from './group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TODO-tasks';

  groups: Group[];
  test = 'ok';

  constructor(private groupService: GroupService) {}

  getGroups(): void {
    this.groupService.getGroups()
    .subscribe(result => {
      this.test = 'truc';
      this.groups = result;
      this.test = 'machin';
    });
  }

  ngOnInit() {
    this.getGroups();
  }

}
