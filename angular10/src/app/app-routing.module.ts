import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//added
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  //added
  {path: 'employee', component: EmployeeComponent},
  {path: 'department', component: DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
