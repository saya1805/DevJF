import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ApiService } from '../../Service/api.service';
import { CustmizeToastComponent } from '../../custmize-toast/custmize-toast.component';
import { CustmizeToastService } from '../../custmize-toast/custmize-toast.service';

@Component({
  selector: 'app-log-in',
  imports: [LucideAngularModule,RouterLink,ReactiveFormsModule,CommonModule,RouterModule,CustmizeToastComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  private fb = inject(FormBuilder)
  private apiservice = inject(ApiService)
  private router = inject(Router)
  private toast = inject(CustmizeToastService)

  errorusername = signal(false)
  errorpass = signal(false)

  loginform:FormGroup = this.fb.group({
  "fullname":"",
  "username":"",
   "mailid":"",
  "Password":"",
  "profilePictureUrl":""
  })

  logInForm(){
    if(!this.loginform.get('username')?.value){
      this.errorusername.set(true)
      return;
    }

    if(!this.loginform.get('Password')?.value){
      this.errorpass.set(true)
      return;
    }

    this.apiservice.login(this.loginform.value).subscribe({
      next:(res) =>{
        alert('login sucessfull')
        console.log(res)
          localStorage.setItem('roles',res.roles)
        this.toast.show('Login Successful','success')
        setTimeout(() => {
        this.router.navigateByUrl('home');
      }, 2000);
      },error:(res) => {
        console.log(res)
        this.toast.show('Invalid Login','error');
      }
    })
  }
}
