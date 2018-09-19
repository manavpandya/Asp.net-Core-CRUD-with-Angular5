import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../Services/todo.service';

@Component({
  templateUrl: './FetchTodo.component.html',
  providers: [TodoService]
})

export class FetchTodoComponent {
  public todoList: TodoData[];

  constructor(public http: HttpClient, private _router: Router, private _todoService: TodoService) {
    this.getTodos();
  }

  getTodos() {
    this._todoService.getTodos().subscribe((data: TodoData[]) =>
      this.todoList = data
    )
  }

  delete(todoId) {
    var ans = confirm("Do you want to todo with Id: " + todoId);
    if (ans) {
      this._todoService.deleteTodo(todoId).subscribe((data) => {
        this.getTodos();
      }, error => console.error(error))
    }
  }
}

interface TodoData {
  id: number;
  name: string;
  isComplete: boolean;
} 
