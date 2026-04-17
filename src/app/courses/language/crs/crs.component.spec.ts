import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrsComponent } from './crs.component';

describe('CrsComponent', () => {
  let component: CrsComponent;
  let fixture: ComponentFixture<CrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
