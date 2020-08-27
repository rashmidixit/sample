import { Injectable } from '@angular/core';
import {TodoItem, Priority} from '../todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: TodoItem[];

  constructor() { 
    this.initDB();
  }
  private initDB() {
     this.todoList = [{description: "Get groceries for tomorrow", priority: Priority.Low},
            {description: "Exercise!", priority: Priority.Normal},
            {description: "Dont forget to get meds.", priority: Priority.High}];
  } 

  getItems(): TodoItem[]{
    return this.todoList;
  }

  addItem(description: string, priority: Priority): TodoItem[]{
    this.todoList.push({description: description, priority: priority});
    return this.todoList;
  }

  removeItem(index: number): TodoItem[]{
    this.todoList.splice(index, 1);
    return this.todoList;
  }

  editItem(index: number, descr: string, priority: Priority): TodoItem[]{
    this.todoList[index].description = descr;
    this.todoList[index].priority = priority;
    return this.todoList;
  }


}
