import { Component, effect, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ArrayService } from '../../Service/array.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../Service/api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { COURS_LOGOS } from '../courses.logos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-language',
  imports: [LucideAngularModule,CommonModule,RouterModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent {
  public courseLogos = COURS_LOGOS

  public crs_arr = inject(ArrayService)
  public Crsarr = this.crs_arr.courses
  public apiService = inject(ApiService)
  public route = inject(Router)

  crslistnew = toSignal(this.apiService.getCrs() as Observable<any[]>, {initialValue: []})
  
  constructor(){
    effect(() => {
      console.log('updated response rs list',this.crslistnew())
    })
  }

  goToDetails(id:any){
    this.route.navigate(['courses/lncrs',id])
  }



}
