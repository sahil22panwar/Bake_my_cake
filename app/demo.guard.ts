import { CanDeactivateFn } from '@angular/router';

export const demoGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
