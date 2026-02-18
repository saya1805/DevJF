import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DActiveComponent } from './d-active.component';

describe('DActiveComponent', () => {
  let component: DActiveComponent;
  let fixture: ComponentFixture<DActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DActiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
