import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Priority, TodoItem } from './todo-item';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TodoService } from './services/todo.service';
// import { fa } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app-todo';
  priorityTypes: Priority;
  todoList: TodoItem[] = [];
  selectAll = false;
  description: string = "THIS IS EDITABLE";

  itemControls: FormArray;

  addTodoForm: FormGroup;


  constructor(private todoService: TodoService, private formBuilder: FormBuilder) {
    this.todoList = todoService.getItems();
   }

 ngOnInit() {
    this.itemControls = new FormArray([]);
    this.todoList.map(item=>{
      const group = new FormGroup({
        description: new FormControl(item.description),
        priority: new FormControl(item.priority)
      });
  
      this.itemControls.push(group);
    });

    this.addTodoForm = new FormGroup({
      newDescription: new FormControl(''),
      newPriority: new FormControl('Normal')
    })

 }

 refreshForms(){
    
   
 }

 selectAllItems() {

 }

 deleteMultiple() {

 }

//  @HostListener('document:keydown', ['$event'])
//   handleDeleteKeyboardEvent(event: KeyboardEvent) {
//     if (event.key === 'Delete' || event.key === 'Backspace') {
//       console.log('Delete Key Pressed');
//     }
//   }

 addItem() {
  this.todoList = this.todoService.addItem(this.addTodoForm.value.newDescription,
                this.addTodoForm.value.newPriority);
  this.itemControls.push(new FormGroup({
    description: new FormControl(this.addTodoForm.value.newDescription),
    priority: new FormControl(this.addTodoForm.value.newPriority)
  }) ); 
 }
//  editItem(index: number) {
//   this.todoList = this.todoService.editItem(index, 'This is edited', Priority.Low);
//  }

//  deleteItem(index: number) {
//    this.todoList = this.todoService.removeItem(index);
//  }

//   getControl(index: number, field: string ): FormControl {
//     return this.itemControls.at(index).get(field) as FormControl;
//   }
}
