import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TodoService {
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getTodos() {
    return this._http.get(this.myAppUrl + 'api/Todo/Index');
    //.map((response: Response) => response.json())
    //.catch(this.errorHandler);
  }

  getTodoById(id: number) {
    return this._http.get(this.myAppUrl + "api/Todo/Details/" + id);
    //.map((response: Response) => response.json())
    //.catch(this.errorHandler)
  }

  saveTodo(todo) {
    return this._http.post(this.myAppUrl + 'api/Todo/Create', todo);
    //.map((response: Response) => response.json())
    //.catch(this.errorHandler)
  }

  updateTodo(todo) {
    return this._http.put(this.myAppUrl + 'api/Todo/Edit', todo);
    //.map((response: Response) => response.json())
    //.catch(this.errorHandler);
  }

  deleteTodo(id) {
    return this._http.delete(this.myAppUrl + "api/Todo/Delete/" + id);
    //.map((response: Response) => response.json())
    //.catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
