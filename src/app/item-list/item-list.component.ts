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

  deleteItem(item: Item): void {
    // Implement logic to delete the item
    // Use your service to delete the item
    // Refresh the trip details after deleting an item
    this.loadTripDetails(this.trip.id);
  }
}
