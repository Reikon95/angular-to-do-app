import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss'],
})
export class TodoTableComponent implements OnInit {
  todos: object[];
  constructor() {}
  ngOnInit(): void {
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
  public removeToDo() {
    console.log(this.todos);
  }
  public addToDo(): void {
    this.todos.push({
      id: 6,
      title: 'Adding extra worked',
      completed: false,
      editing: false,
    });
  }
}
