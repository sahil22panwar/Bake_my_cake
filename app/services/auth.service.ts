import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  login(admincode: string) {
    if( admincode === "sahil1997"){
      this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }
}
logout(): void {
  this.isLoggedIn = false;
}

isloggedin():boolean {
  return this.isLoggedIn;
}




}

