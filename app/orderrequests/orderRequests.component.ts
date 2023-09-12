import { Component, OnInit } from '@angular/core';
import { order } from '../models/order';
import { ItemRequestService } from '../services/item-request.service';

@Component({
  selector: 'app-orderRequests',
  templateUrl: './orderRequests.component.html',
  styleUrls: ['./orderRequests.component.css']
})
export class OrderRequestsComponent implements OnInit {

  displayedColumns: string[] = ["Serial No.", 'Item Name','Customer Name', 'Customer Email', 'Customer Phone', 'Address','Per Item Price','Quantity','Final Amount'];
  order: order[] = [];
  constructor(private itemRequestService: ItemRequestService) { }
  bgcolor="whitesmoke";
  ngOnInit(): void {
    this.itemRequestService.getAllOrderReqeusts().subscribe({
      next: (data: order[]) => {
        this.order = this.assignSerialNumbers(data);
        
        
      },
      error: err => {
        alert(err);
      }
    });
  }
  

  assignSerialNumbers(orders: order[]): order[] {
    return orders.map((order, index) => {
      return { ...order, serialNumber: index + 1 };
    });
  }
}