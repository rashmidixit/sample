import { Component, OnInit } from '@angular/core';
import { Priority, TodoItem } from './todo-item';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'todo-list';

  todoList: TodoItem[] = [];

  controls: FormArray;


  constructor() {
    this.todoList.push({id: 1, description: 'First', priority: Priority.High});
    this.todoList.push({id: 2, description: 'Second', priority: Priority.High});
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

  getControl(index: number, field: string ): FormControl {
    return this.controls.at(index).get(field) as FormControl;
  }
}
