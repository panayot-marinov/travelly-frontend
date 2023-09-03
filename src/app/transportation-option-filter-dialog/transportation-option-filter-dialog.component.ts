import { Component } from '@angular/core';
import {TransportationOptionType} from "../enums/transportation-option-type";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-transportation-option-filter-dialog',
  templateUrl: './transportation-option-filter-dialog.component.html',
  styleUrls: ['./transportation-option-filter-dialog.component.css']
})
export class TransportationOptionFilterDialogComponent {
  type = TransportationOptionType.WALK;
  duration = '';
  price = '';


  constructor(private dialogRef: MatDialogRef<TransportationOptionFilterDialogComponent>) {}

  ngOnInit(): void {}

  applyFilters() {
    let queryParams = '';
    if (this.type) {
      queryParams += `type=${this.type}&`;
    }
    if (this.duration) {
      queryParams += `duration=${this.duration}&`;
    }
    if (this.price) {
      queryParams += `price=${this.price}&`;
    }

    if (queryParams.endsWith('&')) {
      queryParams = queryParams.slice(0, -1);
    }

    this.dialogRef.close(queryParams);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
