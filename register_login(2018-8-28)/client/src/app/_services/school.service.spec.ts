import { TestBed, inject } from '@angular/core/testing';

import { SchoolService } from './school.service';

describe('SchoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolService]
    });
  });

  it('should be created', inject([SchoolService], (service: SchoolService) => {
    expect(service).toBeTruthy();
  }));
});
