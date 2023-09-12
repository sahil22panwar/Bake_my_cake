import { CanDeactivateFn } from '@angular/router';
import { ItemCartComponent } from '../cart/item-cart.component';

export const canDeactivateGuard: CanDeactivateFn<ItemCartComponent> = (component:ItemCartComponent, currentRoute, currentState, nextState) => {
  return component.canDeactivate?component.canDeactivate():true;
};
