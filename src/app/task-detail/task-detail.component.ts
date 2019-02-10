import { Component, OnInit, Input } from '@angular/core';
import { TaskDetail } from '../entities/entities';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() detail: TaskDetail;

  constructor() { }

  ngOnInit() {
  }

}
