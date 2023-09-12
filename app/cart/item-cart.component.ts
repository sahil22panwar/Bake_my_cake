import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../services/route.service';
import { ItemRequestService } from '../services/item-request.service';
import { ItemService } from '../services/item.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { item } from '../models/item';
import { order } from '../models/order';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    private orderRequestService: ItemRequestService,
    private routeService: RouteService,
    private snackBar: MatSnackBar,) { }

  item?: item;
  stars: Array<number> = [];
  order: order = {};
  submitStatus:any = false;
  minDate = new Date();
  finalAmount: number = 0;




  
  calculateFinalPrice() {
    if (this.item?.itemPrice && this.order.quantity) {
      this.finalAmount = this.item.itemPrice * this.order.quantity;
    }
  }

  

    canDeactivate() {
      if (!this.submitStatus)
          this.submitStatus = confirm("You have not submitted a request to this order. Any details entered will be lost. Are you sure you want to leave?");
      return this.submitStatus;
  }

 
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(param => {
          let id = param.get("id") ?? "";
          this.itemService.getItem(id).subscribe(data => {
              this.item = data;
              this.stars = new Array(this.item.itemRating);
              this.submitStatus = false;
          })
      })
  }
  //tdate=new Date();
 

  makeRequest() {
    if (this.order.customerName && this.order.customerEmail &&this.order.customerAddress&& this.order.quantity && this.order.customerPhone) {
      this.order.id=this.item?.id;
      this.order.itemName = this.item?.itemName;
      const price:any=this.item?.itemPrice;
      const quantity:any=this.order?.quantity;
      this.order.price = price * quantity;
      this.order.itemPrice=this.item?.itemPrice;
      
      //const ddt:any=this.order?.dateOfdelivery?.toLocaleDateString('en-US');
      //this.order.dateOfdelivery=ddt;
      this.orderRequestService.saveorderRequest(this.order).subscribe({
        next: data => {
          this.snackBar.open("Request Submitted", "", {
            duration: 3000
          });
          this.submitStatus=true;
          this.routeService.navigateToHomeView();
         
          
          
        },
        error: err => {
          alert(err);
        }
      })
    }
  }



}
