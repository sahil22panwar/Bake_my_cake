import { Component } from '@angular/core';
import { RouteService } from '../services/route.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:RouteService, private auth:AuthService){}
  admincode:string="";
  
  validateAdminAccessCode() {
    this.auth.login(this.admincode);
    if(this.auth.isLoggedIn) {
        this.route.navigateToOrderRequestView();
    }else{
      alert("invalid  admincode")
    }
}

}
