import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-store-menu',
  templateUrl: './store-menu.component.html',
  styleUrls: ['./store-menu.component.css']
})

export class StoreMenuComponent implements OnInit {

  inputText: string = "";

  @Output() cat_emitter = new EventEmitter();
  cat_selected: string;

  class: boolean[] = [
    true,
    false,
    false,
    false,
    false
  ];

  default_placeholder = 'item...';
  current_placeholder = '';

  constructor() { }

  ngOnInit(): void {
    this.current_placeholder = this.default_placeholder;
  }

  onBtnClick(e) {
    this.resetAllButtons();
    this.class[e.target.id] = !this.class[e.target.id];
    // assign current_category in service
    this.cat_selected = e.target.textContent;
    this.cat_emitter.emit(this.cat_selected.toLowerCase());
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

  onKey() {
    // check if enter key pressed
    this.cat_emitter.emit(this.inputText.toLowerCase());
    this.inputText = "";
  }

}
