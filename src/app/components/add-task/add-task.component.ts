import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CATEGORY, Task } from 'src/app/Task';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = "";
  day: Date = new Date();
  category: CATEGORY = CATEGORY.Study;
  reminder: boolean = false;
  showAddTask:boolean = false;
  subscription?: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask= value);
   }

  ngOnInit(): void {
  }

  limpiarForm(){
    this.text = "";
    this.day = new Date();
    this.category = CATEGORY.Home;
    this.reminder= false;
  }

  onSubmit(){
    if(this.text.length===0){
      alert("Add a Task!")
    } else {
    const {text,day,category,reminder} = this;
    const newTask = {text, day, category, reminder};
    this.onAddTask.emit(newTask);
    this.limpiarForm();   
  }
  }


}
