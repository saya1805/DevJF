import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingCourseComponent } from './ongoing-course.component';

describe('OngoingCourseComponent', () => {
  let component: OngoingCourseComponent;
  let fixture: ComponentFixture<OngoingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngoingCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OngoingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
