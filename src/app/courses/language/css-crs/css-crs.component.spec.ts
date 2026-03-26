import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCrsComponent } from './css-crs.component';

describe('CssCrsComponent', () => {
  let component: CssCrsComponent;
  let fixture: ComponentFixture<CssCrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssCrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssCrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
