import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-menu',
  templateUrl: './store-menu.component.html',
  styleUrls: ['./store-menu.component.css']
})
export class StoreMenuComponent implements OnInit {

  class: boolean[] = [
    true,
    false,
    false,
    false,
    false
  ];

  default_placeholder = 'Enter search terms...';
  current_placeholder = '';

  constructor() { }

  ngOnInit(): void {
    this.current_placeholder = this.default_placeholder;
  }

  onBtnClick(e) {
    this.resetAllButtons();
    this.class[e.target.id] = !this.class[e.target.id];
  }

  resetAllButtons() {
    for(let i=0; i < 5; i++) {
      this.class[i] = false;
    }
  }

  onInputFocus() {
    this.current_placeholder = '';
  }

  onInputBlur() {
    this.current_placeholder = this.default_placeholder;
  }

}
