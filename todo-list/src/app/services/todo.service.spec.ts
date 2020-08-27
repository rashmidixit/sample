import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { TodoItem, Priority } from '../todo-item';

const dummyTodoItemListSingle: TodoItem[] = [{
  description: "This is an item",
  priority: Priority.High
}];

const dummyTodoItemList: TodoItem[] = [{
            description: "This is an item",
            priority: Priority.High
            },
            {
              description: "This is the second item",
              priority: Priority.Normal
            }
        ];

  describe('TodoService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });

  it('should add two items', () => {
    const service: TodoService = TestBed.get(TodoService);
    service.addItem("This is an item", Priority.High);
    expect(service.addItem("This is the second item", Priority.Normal)).toEqual(dummyTodoItemList); 
  });

  it('should add two items and allow first to be deleted', () => {
    const service: TodoService = TestBed.get(TodoService);
    service.addItem("This is an item", Priority.High);
    expect(service.addItem("This is the second item", Priority.Normal)).toEqual(dummyTodoItemList); 
    expect(service.removeItem(2)).toEqual(dummyTodoItemListSingle);
  });


});
