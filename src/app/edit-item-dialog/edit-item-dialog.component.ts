import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../model/item.model'; // Import your Item model

@Component({
  selector: 'app-edit-item-dialog',
  templateUrl: './edit-item-dialog.component.html',
  styleUrls: ['./edit-item-dialog.component.css']
})
export class EditItemDialogComponent {
  editedItem: Item;

  constructor(
    public dialogRef: MatDialogRef<EditItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: Item }
  ) {
    this.editedItem = { ...data.item };
  }

  public saveChanges() {
    // Implement logic to save changes to the item
    // Update the item using a service call
    // Close the dialog
    this.dialogRef.close();
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }
}
