import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { item } from '../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  cookies: string = "cookies";
  cakes: string = "cakes";
  brownies: string = "brownies";
  all:string="all";
  muffins:string="muffins";

  items: Array<item> = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: err => {
        alert(err);
      }
    });
  }

  onSearchTextChanged(itemName: string) {
    this.itemService.getAllItems().subscribe({
      next: data => {
        if (itemName || itemName !== '') {
          this.items = data.filter((item) =>
            item.itemName?.toLowerCase().startsWith(itemName.toLowerCase())
          );
        } else {
          this.items = data;
        }
      },
      error: (error) => {
        alert('Network Error !! Please Try Again Later');
      },
    });
  }
  reset(itemName:string){
    this.itemService.getAllItems().subscribe({
      next: data => {if (itemName==="all") {
        this.items = data;
      }
      }
    })
  }
  displaysorted(itemName: string) {
    this.itemService.getAllItems().subscribe({
      next: (data) => {
        if (itemName || itemName !== '') {
          this.items = data.filter(product =>
            product.itemCategory?.toLowerCase().includes(itemName.toLowerCase())
          );
        } else {
          this.items = data;
        }
      },
      error: (error) => {
        alert('Network Error !! Please Try Again Later');
      },
    });
  }

}
