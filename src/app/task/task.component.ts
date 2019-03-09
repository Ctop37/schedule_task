import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Task } from '../entities/entities';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() taskEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  openTaskModal() {
    this.doTask(this.task.id);
  }

  doTask(idTask) {
    this.taskEvent.emit(idTask);
  }

}
