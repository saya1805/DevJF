import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngCrsComponent } from './ang-crs.component';

describe('AngCrsComponent', () => {
  let component: AngCrsComponent;
  let fixture: ComponentFixture<AngCrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngCrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngCrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
