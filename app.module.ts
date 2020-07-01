import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { StoreMenuComponent } from './store-menu/store-menu.component';
import { StoreShelvesComponent } from './store-shelves/store-shelves.component';
import { InventoryService } from './inventory.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoreItemComponent,
    StoreMenuComponent,
    StoreShelvesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
