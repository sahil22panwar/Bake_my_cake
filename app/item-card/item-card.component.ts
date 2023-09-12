import { Component, Input, OnInit } from '@angular/core';

import { item } from '../models/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  static canDeactivate(): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error('Method not implemented.');
  }

  @Input()
  item!: item
  constructor() { }
  
  ngOnInit(): void {
  } 
}



