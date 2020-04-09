import { TestBed } from '@angular/core/testing';

import { TokenIntercetorService } from './token-intercetor.service';

describe('TokenIntercetorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenIntercetorService = TestBed.get(TokenIntercetorService);
    expect(service).toBeTruthy();
  });
});
