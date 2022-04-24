import { Component, OnInit } from '@angular/core';
import { TASK } from 'src/app/mock-task';
import {Task} from "../../Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = TASK;
  
  constructor() { }

  ngOnInit(): void {
  }

}
