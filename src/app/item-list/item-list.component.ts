import { Component, Input } from '@angular/core';
import { Item } from '../model/item.model'; // Make sure to import your Item model

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() items: Item[] = []; // Input property to receive the list of items

  constructor(private addItemDialogService: AddItemDialogService,
              private editItemDialogService: EditItemDialogService,
              private DeleteItemDialogService:DeteleItemDialogService,) {}

  public openAddItemDialog() {
    this.addItemDialogService.openAddItemDialog();
  }

  public editAddItemDialog() {
    this.addItemDialogService.openAddItemDialog();
  }

  public deleteAddItemDialog() {
    this.addItemDialogService.openAddItemDialog();
  }
}
