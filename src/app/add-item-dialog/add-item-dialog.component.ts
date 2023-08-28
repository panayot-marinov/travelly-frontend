import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Item} from "../model/item.model";
import {User} from "../model/user.model";

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent {
  item: Item = {
    id: 0,
    trip: {
            id: 0,
            name: '',
            destination: '',
            startDate: new Date(),
            endDate: new Date(),
            budget: 5,
            interests: "",
            items: [],
            users: [],
          },
    name: '',
    desc: '', // Make sure you have a 'description' property in your Item model
    amount: 0,
    isPacked: false
  };


  constructor(public dialogRef: MatDialogRef<AddItemDialogComponent>) {}

  public addItem() {
    // Implement item addition logic
    // Call the service to add the item
    // Close the dialog
    this.dialogRef.close();
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }
}
