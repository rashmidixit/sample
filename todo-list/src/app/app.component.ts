import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Priority, TodoItem } from './todo-item';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from './services/todo.service';
// import { fa } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  priorityTypes: Priority;
  todoList: TodoItem[] = [];

  controls: FormArray;
  @ViewChild('newDescription', {static: false}) newDescription:ElementRef;
  @ViewChild('newPriority', {static: false}) newPriority:ElementRef;


  constructor(private todoService: TodoService) {
    this.todoList = todoService.getItems();
   }

 ngOnInit() {
  const groups = this.todoList.map(item => {
    return new FormGroup({
      description: new FormControl(item.description, Validators.required),
      priority: new FormControl(item.priority)
    });
  });
  this.controls = new FormArray(groups);
 }

 addItem(){
  this.todoList = this.todoService.addItem(this.newDescription.nativeElement.value, 
                                          this.newPriority.nativeElement.value);
 }

  getControl(index: number, field: string ): FormControl {
    return this.controls.at(index).get(field) as FormControl;
  }
}
