import { Component, inject } from '@angular/core';
import { CourseArrService } from '../../../Service/course-arr.service';

@Component({
  selector: 'app-asp-crs',
  imports: [],
  templateUrl: './asp-crs.component.html',
  styleUrl: './asp-crs.component.css'
})
export class AspCrsComponent {

  private ang_crs = inject(CourseArrService)
  public crs_info_arr = this.ang_crs.ng_crs
}
