import { Component, inject } from '@angular/core';
import { CourseArrService } from '../../../Service/course-arr.service';

@Component({
  selector: 'app-sql-crs',
  imports: [],
  templateUrl: './sql-crs.component.html',
  styleUrl: './sql-crs.component.css'
})
export class SqlCrsComponent {

  private ang_crs = inject(CourseArrService)
  public crs_info_arr = this.ang_crs.ng_crs
}
