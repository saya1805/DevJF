import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmizeToastComponent } from './custmize-toast.component';

describe('CustmizeToastComponent', () => {
  let component: CustmizeToastComponent;
  let fixture: ComponentFixture<CustmizeToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustmizeToastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustmizeToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
