import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspCrsComponent } from './asp-crs.component';

describe('AspCrsComponent', () => {
  let component: AspCrsComponent;
  let fixture: ComponentFixture<AspCrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AspCrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspCrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
