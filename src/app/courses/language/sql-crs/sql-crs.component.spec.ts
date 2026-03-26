import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlCrsComponent } from './sql-crs.component';

describe('SqlCrsComponent', () => {
  let component: SqlCrsComponent;
  let fixture: ComponentFixture<SqlCrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlCrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlCrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
