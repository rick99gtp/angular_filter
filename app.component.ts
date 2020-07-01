import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: {imageURL: string, name: string, price: number, category: string}[] = [];

  title = 'filter-project';

  constructor(private listService: InventoryService) { }

  ngOnInit() {
    this.items = this.listService.items;
  }
}
