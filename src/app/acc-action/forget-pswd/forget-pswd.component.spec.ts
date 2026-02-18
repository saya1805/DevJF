import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPswdComponent } from './forget-pswd.component';

describe('ForgetPswdComponent', () => {
  let component: ForgetPswdComponent;
  let fixture: ComponentFixture<ForgetPswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPswdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
