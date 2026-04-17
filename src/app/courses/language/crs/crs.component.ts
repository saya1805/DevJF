import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../Service/api.service';
import { Observable } from 'rxjs';
import { COURS_LOGOS } from '../../courses.logos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crs',
  imports: [CommonModule],
  templateUrl: './crs.component.html',
  styleUrl: './crs.component.css'
})
export class CrsComponent {
  public route = inject(ActivatedRoute)
  public apiservice = inject(ApiService)

  logoPath:any
   
  id:any = this.route.snapshot.paramMap.get('id')

  crslistbyId = toSignal(this.apiservice.getCrsbyId(this.id)  as Observable<any[]>, {initialValue: null}  )
  
  constructor(){
    effect(() => {
      console.log(this.id,'777737373737')
      // console.log(this.crslistbyId(),'iddddddd')

      const data = this.crslistbyId();
      console.log(data)
      if (data && data.length > 0) {
      const coursetitle = data[0].title
       this.logoPath = COURS_LOGOS[coursetitle]
      console.log(data)
      }
  // if (data && data.length > 0) {
  //   console.log('Data found:', data[0]); // Array चा पहिला घटक प्रिंट करा
  // }
    })
  }
  

}
