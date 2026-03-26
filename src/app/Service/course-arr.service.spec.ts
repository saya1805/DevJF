import { TestBed } from '@angular/core/testing';

import { CourseArrService } from './course-arr.service';

describe('CourseArrService', () => {
  let service: CourseArrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseArrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
