import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgetPswdComponent } from './forget-pswd/forget-pswd.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'logIn',
    pathMatch:'full'
  },
  {
    path:'logIn',
    component:LogInComponent
  },
  {
    path:'logOut',
    component:LogOutComponent
  },
  {
    path:'signIn',
    component:SignInComponent
  },
  {
    path:'fpswd',
    component:ForgetPswdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccActionRoutingModule { }
