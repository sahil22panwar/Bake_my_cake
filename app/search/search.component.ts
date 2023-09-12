import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  itemName:string="";
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  
  searchProduct(){
    this.searchTextChanged.emit(this.itemName)
  }
  }




