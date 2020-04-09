import { TestBed } from '@angular/core/testing';

import { CelebrityService } from './celebrity.service';

describe('CelebrityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CelebrityService = TestBed.get(CelebrityService);
    expect(service).toBeTruthy();
  });
});
