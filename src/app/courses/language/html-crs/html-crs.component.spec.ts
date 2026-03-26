import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCrsComponent } from './html-crs.component';

describe('HtmlCrsComponent', () => {
  let component: HtmlCrsComponent;
  let fixture: ComponentFixture<HtmlCrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
