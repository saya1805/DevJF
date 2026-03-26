import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageComponent } from './language/language.component';
import { OngoingCourseComponent } from './ongoing-course/ongoing-course.component';
import { CompletedCourseComponent } from './completed-course/completed-course.component';
import { SavedCourseComponent } from './saved-course/saved-course.component';
import { CertificateComponent } from './certificate/certificate.component';
import { AngCrsComponent } from './language/ang-crs/ang-crs.component';
import { AspCrsComponent } from './language/asp-crs/asp-crs.component';
import { CssCrsComponent } from './language/css-crs/css-crs.component';
import { HtmlCrsComponent } from './language/html-crs/html-crs.component';
import { SqlCrsComponent } from './language/sql-crs/sql-crs.component';

const routes: Routes = [
 {
    path:'',
    redirectTo:'languages',
    pathMatch:'full'
  },
  {
    path:'languages',
    component:LanguageComponent
  },
  {
    path:'Process',
    component:OngoingCourseComponent
  },
  {
    path:"completed",
    component:CompletedCourseComponent 
  },
  {
    path:'saved',
    component:SavedCourseComponent
  },
  {
    path:'certificate',
    component:CertificateComponent
  },
  {
    path:'ng',
    component:AngCrsComponent
  },
  {
    path:'sp',
    component:AspCrsComponent
  },
  {
    path:'ss',
    component:CssCrsComponent
  },
  {
    path:'ml',
    component:HtmlCrsComponent
  },
  {
    path:'ql',
    component:SqlCrsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
