import { TestBed } from '@angular/core/testing';

import { CheckCartGuard } from './check-cart.guard';

describe('CheckCartGuard', () => {
  let guard: CheckCartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckCartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
