import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccActionRoutingModule } from './acc-action-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ForgetPswdComponent } from './forget-pswd/forget-pswd.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignInComponent,
    LogInComponent,
    LogOutComponent,
    ForgetPswdComponent,
    AccActionRoutingModule
    
  ]
})
export class AccActionModule { }
