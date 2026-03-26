import { Component, inject } from '@angular/core';
import { CourseArrService } from '../../../Service/course-arr.service';

@Component({
  selector: 'app-ang-crs',
  imports: [],
  templateUrl: './ang-crs.component.html',
  styleUrl: './ang-crs.component.css'
})
export class AngCrsComponent {

  private ang_crs = inject(CourseArrService)
  public crs_info_arr = this.ang_crs.ng_crs

}
