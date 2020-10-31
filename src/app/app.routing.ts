import{ RouterModule, Routes} from "@angular/router";
import { from } from 'rxjs';
import { Task5Component } from './task5/task5.component';
import { TodosComponent} from "./todos/todos.component";
import { PracticeComponent} from "./practice/practice.component";
import { PipesComponent} from "./pipes/pipes.component";
import { NewdemoComponent} from "./newdemo/newdemo.component";
import { LoginComponent} from "./login/login.component";
import { HideComponent} from "./hide/hide.component";
import { DirectivesComponent} from "./directives/directives.component";
import { ErrorComponent} from "./error/error.component";
import { EmployeeComponent } from "./employee/employee.component";
import { ProductsComponent } from "./products/products.component";
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from "./signup/signup.component";
import { DemoComponent } from "./demo/demo.component";
import { DatabaseComponent} from './database/database.component';
import { AddtaskComponent } from './database/addtask/addtask.component';
import { EdittaskComponent} from './database/edittask/edittask.component';
import { EditproComponent } from './database/editpro/editpro.component';
import { EditempComponent} from './database/editemp/editemp.component';
const arr : Routes = [

  {path :'task5', component:Task5Component},
  {path :'todo', component:TodosComponent },
  {path :'practice', component: PracticeComponent },
  {path :'pipes', component:PipesComponent },
  {path :'newdemo', component:NewdemoComponent },
  {path :'login', component:LoginComponent },
  {path :'hide', component:HideComponent },
  {path :'directives', component:DirectivesComponent },
  {path :'products',component:ProductsComponent},
  {path :'menu',component:MenuComponent},
  {path :'signup',component:SignupComponent},
  {path :'database',component:DatabaseComponent},
  {path :'addtask',component:AddtaskComponent},
  {path :'edittask/:id',component:EdittaskComponent},
  {path :'editemp/:id',component:EditempComponent},
  {path :'editpro/:id',component:EditproComponent},
  {path :'demo',component:DemoComponent},
  {path :'employee', component:EmployeeComponent },
  {path :'error', component: ErrorComponent},
  {path : "**" , redirectTo:'/error'}

];
export const arrRouting = RouterModule.forRoot(arr);
