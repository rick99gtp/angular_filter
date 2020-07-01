import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-shelves',
  templateUrl: './store-shelves.component.html',
  styleUrls: ['./store-shelves.component.css']
})
export class StoreShelvesComponent implements OnInit {
  @Input() items: {imageURL: string, name: string, price: number, category: string}[] = [];
  @Input() cur_cat: string;
  @Input() data: string;

  constructor() { }

  ngOnInit(): void {
  }

}
