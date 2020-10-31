import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { arrRouting} from "./app.routing";



import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import { NewdemoComponent } from './newdemo/newdemo.component';
import { Task5Component } from './task5/task5.component';
import { HideComponent } from './hide/hide.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighletDirective } from './highlet.directive';
import { CreditcardDirective } from './creditcard.directive';
import { PracticeComponent } from './practice/practice.component';
import { PipesComponent } from './pipes/pipes.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { EmployeeComponent } from './employee/employee.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { DemoComponent } from './demo/demo.component';
import {HttpClientModule  } from "@angular/common/http";
import { DatabaseComponent } from './database/database.component';
import { AddtaskComponent } from './database/addtask/addtask.component';
import { EdittaskComponent } from './database/edittask/edittask.component';
import { EditempComponent } from './database/editemp/editemp.component';
import { EditproComponent } from './database/editpro/editpro.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    NewdemoComponent,
    Task5Component,
    HideComponent,
    DirectivesComponent,
    HighletDirective,
    CreditcardDirective,
    PracticeComponent,
    PipesComponent,
    HeaderComponent,
    ErrorComponent,
    EmployeeComponent,
    MenuComponent,
    ProductsComponent,
    SignupComponent,
    DemoComponent,
    DatabaseComponent,
    AddtaskComponent,
    EdittaskComponent,
    EditempComponent,
    EditproComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    arrRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
