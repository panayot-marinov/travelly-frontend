import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-accommodation-filter-dialog',
  templateUrl: './accommodation-filter-dialog.component.html',
  styleUrls: ['./accommodation-filter-dialog.component.css']
})
export class AccommodationFilterDialogComponent implements OnInit {
  name = '';
  address = '';
  city = '';
  pricePerNightFrom = '';
  pricePerNightTo = '';

  constructor(private dialogRef: MatDialogRef<AccommodationFilterDialogComponent>) {}

  ngOnInit(): void {}

  applyFilters() {
    // Construct the query parameter string here
    let queryParams = '';
    if (this.name) {
      queryParams += `name=${this.name}&`;
    }
    if (this.address) {
      queryParams += `address=${this.address}&`;
    }
    if (this.city) {
      queryParams += `city=${this.city}&`;
    }
    if (this.pricePerNightFrom) {
      queryParams += `pricePerNightFrom=${this.pricePerNightFrom}&`;
    }
    if (this.pricePerNightTo) {
      queryParams += `pricePerNightTo=${this.pricePerNightTo}&`;
    }

    // Remove trailing '&' if it exists
    if (queryParams.endsWith('&')) {
      queryParams = queryParams.slice(0, -1);
    }

    // Close the dialog and pass the query parameter string to the parent component
    this.dialogRef.close(queryParams);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
