import { TestBed } from '@angular/core/testing';

import { CustmizeToastService } from './custmize-toast.service';

describe('CustmizeToastService', () => {
  let service: CustmizeToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustmizeToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
