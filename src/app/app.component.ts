import { Component } from '@angular/core';
import { Group, Task, TaskDetail } from './entities/entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TODO-tasks';

  groups: Array<Group> = [
    {
    id: 1,
    name: 'Group 01',
    tasks: [
      {
        id: 1,
        name: 'Task 01',
        criticity: 1,
        detail: {
          description: 'Group 01 Task 01'
        }
      },
      {
        id: 2,
        name: 'Task 02',
        criticity: 1,
        detail: {
          description: 'Group 01 Task 02'
        }
      },
      {
        id: 3,
        name: 'Task 03',
        criticity: 1,
        detail: {
          description: 'Group 01 Task 03'
        }
      },
      {
        id: 4,
        name: 'Task 04',
        criticity: 1,
        detail: {
          description: 'Group 01 Task 04'
        }
      },
      {
        id: 5,
        name: 'Task 05',
        criticity: 1,
        detail: {
          description: 'Group 01 Task 05'
        }
      },
      {
        id: 6,
        name: 'Task 06',
        criticity: 1,
        detail: {
          description: 'Group 01 Task 06'
        }
      },
      {
        id: 7,
        name: 'Task 07',
        criticity: 1,
        detail: {
          description: 'Group 01 Task 07'
        }
      },
      {
        id: 8,
        name: 'Task 08',
        criticity: 1,
        detail: {
          description: 'Group 01 Task 08'
        }
      },
      {
        id: 9,
        name: 'Task 09',
        criticity: 1,
        detail: {
          description: 'Group 01 Task 09'
        }
      },
      {
        id: 10,
        name: 'Task 10',
        criticity: 1,
        detail: {
          description: 'Group 01 Task 10'
        }
      },
      {
        id: 11,
        name: 'Task 11',
        criticity: 1,
        detail: {
          description: 'Group 01 Task 11'
        }
      },
      {
        id: 12,
        name: 'Task 12',
        criticity: 1,
        detail: {
          description: 'Group 01 Task 12'
        }
      }
    ]
    },
     {
      id: 2,
      name: 'Group 02',
      tasks: [
        {
          id: 4,
          name: 'Task 01',
          criticity: 1,
          detail: {
            description: 'Group 02 Task 01'
          }
        },
        {
          id: 5,
          name: 'Task 02',
          criticity: 1,
          detail: {
            description: 'Group 02 Task 02'
          }
        }
      ]
    }
  ];

}
