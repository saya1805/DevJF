import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ArrayService } from '../../Service/array.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-language',
  imports: [LucideAngularModule,CommonModule,RouterModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent {
  public crs_arr = inject(ArrayService)
  public Crsarr = this.crs_arr.courses
}
