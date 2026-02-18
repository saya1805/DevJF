import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule,ReactiveFormsModule,RouterModule,LucideAngularModule,RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  private apiservice = inject(ApiService)
  public fb= inject(FormBuilder)
  private router = inject(Router)

  signinform:FormGroup = this.fb.group({
      "fullname":"",
      "username":"",
      "mailid":"",
      "Password":""
    })

  isLoading = signal(false);
  errorMessage = signal('');

  constructor(){}

SubmitForm(){
  this.isLoading.set(true)
  this.errorMessage.set('')

  this.apiservice.resgister(this.signinform.value).subscribe({
   next: (res) => {
    alert("sucess")
        console.log('registration sucess response', res);
        this.isLoading.set(false);
        this.router.navigate(["/action/logIn"])
      },
      error: (err) => {
        this.errorMessage.set(err);
        this.isLoading.set(false);
      }
    });
  
  this.signinform.value
  console.log(this.signinform.value)
}

}
