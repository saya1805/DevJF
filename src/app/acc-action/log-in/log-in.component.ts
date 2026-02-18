import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-log-in',
  imports: [LucideAngularModule,RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  private fb = inject(FormBuilder)
  loginform:FormGroup = this.fb.group({
  "username":"",
  "password":""
  })
}
