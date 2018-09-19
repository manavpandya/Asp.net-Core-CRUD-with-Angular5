import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../Services/todo.service';

@Component({
  templateUrl: './addtodo.component.html',
  providers: [TodoService]
})

export class AddTodoComponent implements OnInit {
  todoForm: FormGroup;
  title: string = "Create";
  todoId: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _todoService: TodoService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.todoId = this._avRoute.snapshot.params["id"];
    }

    this.todoForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required]],
      isComplete: [''],
    })
  }

  ngOnInit() {

    if (this.todoId > 0) {
      this.title = "Edit";
      this._todoService.getTodoById(this.todoId)
        .subscribe(resp => this.todoForm.setValue(resp)
          , error => this.errorMessage = error);
    }

  }

  save() {

    if (!this.todoForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._todoService.saveTodo(this.todoForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-todo']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._todoService.updateTodo(this.todoForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-todo']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/fetch-todo']);
  }

  get name() { return this.todoForm.get('name'); }
}  
