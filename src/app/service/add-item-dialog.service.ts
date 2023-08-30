import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddItemDialogComponent} from "../add-item-dialog/add-item-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class AddItemDialogService {

  constructor(private dialog: MatDialog) {}

  openAddItemDialog() {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      width: '400px' // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close event, if needed
    });
  }
}
