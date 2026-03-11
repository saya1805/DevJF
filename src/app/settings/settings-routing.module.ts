import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"security",
    component:SecurityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
