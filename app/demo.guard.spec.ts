import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { demoGuard } from './demo.guard';

describe('demoGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => demoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
