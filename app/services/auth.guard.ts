import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from './route.service';
import { AuthService } from './auth.service';




export const authGuard: CanActivateFn = (route, state) => {
  const admser:AuthService=inject(AuthService);
  const router:Router=inject(Router);
  const routeser:RouteService=inject(RouteService);
  
  if(admser.isloggedin()){
  return true;}
  else{
  routeser.navigateToLoginView();
  return false;
  }
};





