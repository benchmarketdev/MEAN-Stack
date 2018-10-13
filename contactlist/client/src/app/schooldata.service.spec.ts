import { TestBed, inject } from '@angular/core/testing';

import { SchooldataService } from './schooldata.service';

describe('SchooldataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchooldataService]
    });
  });

  it('should be created', inject([SchooldataService], (service: SchooldataService) => {
    expect(service).toBeTruthy();
  }));
});
