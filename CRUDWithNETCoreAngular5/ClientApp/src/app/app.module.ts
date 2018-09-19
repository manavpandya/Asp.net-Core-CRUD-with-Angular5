import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CreateemployeeComponent } from './addEmployee/addemployee.component';
import { AddTodoComponent } from './addTodo/addTodo.component';
import { FetchEmployeeComponent } from './fetchemployee/fetchemployee.component';
import { FetchTodoComponent } from './fetchTodo/FetchTodo.component';
// Services
import { EmployeeService } from './Services/employee.service';
import { TodoService } from './Services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CreateemployeeComponent,
    FetchEmployeeComponent,
    AddTodoComponent,
    FetchTodoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'fetch-employee', component: FetchEmployeeComponent },
      { path: 'fetch-todo', component: FetchTodoComponent },
      { path: 'register-employee', component: CreateemployeeComponent },
      { path: 'employee/edit/:id', component: CreateemployeeComponent },
      { path: 'add-todo', component: AddTodoComponent },
      { path: 'Todo/edit/:id', component: AddTodoComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [EmployeeService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
