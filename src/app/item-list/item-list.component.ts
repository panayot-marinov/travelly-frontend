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

  openAddItemDialog(): void {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      width: '400px', // Adjust the width as needed
      data: { tripId: this.trip.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Refresh the trip details after adding an item
      this.loadTripDetails(this.trip.id);
    });
  }

  openEditItemDialog(item: Item): void {
    const dialogRef = this.dialog.open(EditItemDialogComponent, {
      width: '400px', // Adjust the width as needed
      data: { item }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Refresh the trip details after editing an item
      this.loadTripDetails(this.trip.id);
    });
  }

  openDeleteItemDialog(item: Item): void {
    const dialogRef = this.dialog.open(DeleteItemDialogComponent, {
      width: '300px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        // Delete the item here (call a method to delete)
        // You can use the item.id to identify the item to delete
        // For example: this.deleteItem(item.id);
      }
    });
  }
}