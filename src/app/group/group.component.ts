import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Group } from '../entities/entities';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() group: Group;
  @Output() taskEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  doTask(idTask: number) {
    this.taskEvent.emit(idTask);
  }

}
