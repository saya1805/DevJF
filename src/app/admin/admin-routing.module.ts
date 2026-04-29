import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import path from 'path';
import { Component } from 'lucide-angular';
import { NewtopicComponent } from './newtopic/newtopic.component';
import { ReportComponent } from './report/report.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:"Ntopic",
    component:NewtopicComponent
  },
  {
    path:"userM",
    component:UserManagementComponent
  },
  {
    path:"crsM",
    component:CourseManagementComponent
  },
  {
    path:"report",
    component:CourseManagementComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
