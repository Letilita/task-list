import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from "../../Task";
import {TASK} from "../../mock-task"
import { faPencil, faTimes, faBell } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { Event } from '@angular/router';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Task = TASK[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  // @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  faTimes= faTimes;
  faPencil = faPencil;
  faBell = faBell;
  color: string = "rgba(214, 214, 213, 0.829)";
  today: Date = new Date()
  


  constructor(private router:Router) {

   }

  ngOnInit(): void {
    
    let fechaComponente = new Date(this.task.day);
    const unDia=86400000;
    if (fechaComponente.getTime()-this.today.getTime()<0){
      this.color='#B6B6B6';
    }else if (fechaComponente.getTime()-this.today.getTime() <unDia){
      this.color='#FEDA83';
    }
  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }

  onEdit(){
    this.router.navigate(["/update", this.task.id])
  }


}
