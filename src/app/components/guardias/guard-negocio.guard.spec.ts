import { TestBed } from '@angular/core/testing';

import { GuardNegocioGuard } from './guard-negocio.guard';

describe('GuardNegocioGuard', () => {
  let guard: GuardNegocioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardNegocioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
