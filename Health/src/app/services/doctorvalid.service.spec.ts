import { TestBed, inject } from '@angular/core/testing';

import { DoctorValidService } from './doctorvalid.service';

describe('DoctorValidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorValidService]
    });
  });

  it('should be created', inject([DoctorValidService], (service: DoctorValidService) => {
    expect(service).toBeTruthy();
  }));
});
