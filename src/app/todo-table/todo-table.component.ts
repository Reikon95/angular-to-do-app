import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss'],
})
export class TodoTableComponent implements OnInit {
  todos: Array<any>;
  additionalToDo: any;
  toDoTitle: string;
  toDoId: any;
  constructor() {}
  ngOnInit(): void {
    this.toDoTitle = '';
    this.toDoId = 6;
    this.todos = [
      {
        id: 1,
        title: 'Walk the dog',
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: 'Start hoovering',
        completed: false,
        editing: false,
      },
      {
        id: 3,
        title: 'Grab some beers',
        completed: false,
        editing: false,
      },
      {
        id: 4,
        title: 'Clean out fridge',
        completed: false,
        editing: false,
      },
      {
        id: 5,
        title: 'Finish this App',
        completed: false,
        editing: false,
      },
    ];
  }
  public deleteToDo(selected: number): void {
    this.todos = this.todos.filter((todo) => {
      return todo.id !== selected;
    });
  }
  public addToDo(): void {
    this.todos.push({
      id: this.toDoId,
      title: this.toDoTitle,
      completed: false,
      editing: false,
    });
    this.toDoTitle = '';
    this.toDoId++;
    console.log(this.todos);
  }
  public completeToDo(selected: any): void {
    selected.completed = !selected.completed;
  }
}
