import { Component, inject } from '@angular/core';
import { CourseArrService } from '../../../Service/course-arr.service';

@Component({
  selector: 'app-html-crs',
  imports: [],
  templateUrl: './html-crs.component.html',
  styleUrl: './html-crs.component.css'
})
export class HtmlCrsComponent {
  
  private ang_crs = inject(CourseArrService)
  public crs_info_arr = this.ang_crs.ng_crs

}
