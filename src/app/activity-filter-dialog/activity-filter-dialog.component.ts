import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {ActivityType} from "../enums/activity-type";

@Component({
  selector: 'app-activity-filter-dialog',
  templateUrl: './activity-filter-dialog.component.html',
  styleUrls: ['./activity-filter-dialog.component.css']
})
export class ActivityFilterDialogComponent implements OnInit {
  activityType = ActivityType.LEARNING;// Default to the first value
  location: string = '';
  startDate: string = '';
  endDate: string = '';
  description: string = '';

  constructor(private dialogRef: MatDialogRef<ActivityFilterDialogComponent>) {}

  ngOnInit(): void {}

  applyFilters() {
    // Construct the query parameter string here
    let queryParams = '';
    if (this.activityType) {
      queryParams += `activityType=${this.activityType}&`;
    }
    if (this.location) {
      queryParams += `location=${this.location}&`;
    }
    if (this.startDate) {
      queryParams += `startDate=${this.startDate}&`;
    }
    if (this.endDate) {
      queryParams += `endDate=${this.endDate}&`;
    }
    if (this.description) {
      queryParams += `description=${this.description}&`;
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
