import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageComponent } from './language/language.component';
import { OngoingCourseComponent } from './ongoing-course/ongoing-course.component';
import { CompletedCourseComponent } from './completed-course/completed-course.component';
import { SavedCourseComponent } from './saved-course/saved-course.component';
import { CertificateComponent } from './certificate/certificate.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
