import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList/employeeList.component';
import {RouterModule, Routes} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';

const APP_ROUTES : Routes = [
    {path: '', component: EmployeeListComponent},
    {path: 'create', component: EmployeeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRouting {

}