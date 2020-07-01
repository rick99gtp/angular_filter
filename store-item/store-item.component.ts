import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {
  @Input() itemobject = {};
  @Input() item_num: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.itemobject);
  }

}
