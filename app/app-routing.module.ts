import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemCartComponent} from './cart/item-cart.component';
import { OrderRequestsComponent } from './orderrequests/orderRequests.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './services/auth.guard';
import { canDeactivateGuard } from './services/can-deactivate.guard';

const routes: Routes = [
  
  
    { path: "login", component: LoginComponent },
    { path: "", component: HomeComponent },
    { path: "item-cart/:id", component: ItemCartComponent, canDeactivate:[canDeactivateGuard],},
    { path: "order-requests", component: OrderRequestsComponent, canActivate: [authGuard],},
    { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
