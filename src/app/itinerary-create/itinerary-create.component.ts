import { Component } from '@angular/core';
import {Accommodation} from "../model/accommodation.model";
import {Activity} from "../model/activity.model";
import {ActivityType} from "../enums/activity-type";
import {TransportationOption} from "../model/transportation-option.model";
import {TransportationOptionType} from "../enums/transportation-option-type";
import {Itinerary} from "../model/itinerary.model";
import {ItineraryService} from "../service/itinerary.service";
import {TripService} from "../service/trip.service";
import {ActivatedRoute} from "@angular/router";
import {AccommodationFilterDialogComponent} from "../accommodation-filter-dialog/accommodation-filter-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ActivityFilterDialogComponent} from "../activity-filter-dialog/activity-filter-dialog.component";

@Component({
  selector: 'app-itinerary-create',
  templateUrl: './itinerary-create.component.html',
  styleUrls: ['./itinerary-create.component.css']
})
export class ItineraryCreateComponent {
  tripId = -1;
  itinerary: Itinerary = new Itinerary(0, 0);
  accommodations: Accommodation[] = [{ id: 0, name: '', address: '', city: '', pricePerNight: 0, latitude: 0, longitude: 0 }];
  activities: Activity[] = [{ id: 0, type: ActivityType.LEARNING, location: '', startTime: new Date(), endTime: new Date(), description: '', latitude: 0, longitude: 0 }];
  transportationOptions: TransportationOption[] = [{ id: 0, type: TransportationOptionType.BUS, duration: new Date(), price: 0, latitude: 0, longitude: 0 }];

  activityTypes = Object.values(ActivityType);
  transportationOptionTypes = Object.values(TransportationOptionType);

  constructor(private itineraryService: ItineraryService,
              private tripService: TripService,
              private route: ActivatedRoute,
              private dialog: MatDialog) {}

  addAccommodation() {
    this.accommodations.push({ id: 0, name: '', address: '', city: '', pricePerNight: 0, latitude: 0, longitude: 0 });
  }

  addActivity() {
    this.activities.push({ id: 0, type: ActivityType.LEARNING, location: '', startTime: new Date(), endTime: new Date(), description: '', latitude: 0, longitude: 0 });
  }

  addTransportationOption() {
    this.transportationOptions.push({ id: 0, type: TransportationOptionType.BUS, duration: new Date(), price: 0, latitude: 0, longitude: 0 });
  }

  addItinerary() {
    this.route.paramMap.subscribe(params => {
      const tripIdParam = params.get('tripId');
      if (tripIdParam !== null) {
        this.tripId = +tripIdParam;

        this.tripService.addItinerary(this.tripId, this.itinerary).subscribe(
          (itineraryId: number) => {
            this.itineraryService.setItineraryId(itineraryId)
            this.itineraryService.addAccommodations(this.accommodations).subscribe();
            this.itineraryService.addActivities(this.activities).subscribe();
            this.itineraryService.addTransportationOptions(this.transportationOptions).subscribe();
          });
      }
    });
  }

  populateRecommendedAccommodations() {
    this.route.paramMap.subscribe(params => {
      const tripIdParam = params.get('tripId');
      if (tripIdParam !== null) {
        this.tripId = +tripIdParam;

        const dialogRef = this.dialog.open(AccommodationFilterDialogComponent);

        dialogRef.afterClosed().subscribe(
          (queryParams: string) => {
            if (queryParams) {
              console.log(queryParams)
              this.tripService.getRecommendedAccommodations(this.tripId, queryParams).subscribe(
                (accommodations: Accommodation[]) => {
                  this.accommodations = accommodations;
                });
          }});
      }});
  }

  populateRecommendedActivities() {
    this.route.paramMap.subscribe(params => {
      const tripIdParam = params.get('tripId');
      if (tripIdParam !== null) {
        this.tripId = +tripIdParam;

        const dialogRef = this.dialog.open(ActivityFilterDialogComponent);

        dialogRef.afterClosed().subscribe(
          (queryParams: string) => {
            if (queryParams) {
              this.tripService.getRecommendedActivities(this.tripId, queryParams).subscribe(
                (activities: Activity[]) => {
                  this.activities = activities;
                });
            }});
      }});
  }


  populateRecommendedTransportationOptions() {
    this.route.paramMap.subscribe(params => {
      const tripIdParam = params.get('tripId');
      if (tripIdParam !== null) {
        this.tripId = +tripIdParam;

        const dialogRef = this.dialog.open(ActivityFilterDialogComponent);

        dialogRef.afterClosed().subscribe(
          (queryParams: string) => {
            if (queryParams) {
              this.tripService.getRecommendedTransportationOptions(this.tripId, queryParams).subscribe(
                (transportationOptions: TransportationOption[]) => {
                  this.transportationOptions = transportationOptions;
                });
            }});


      }});
  }

  deleteAccommodation(accommodationId: number) {
    this.accommodations = this.accommodations.filter(accommodation => accommodation.id !== accommodationId);
  }

  deleteActivity(activityId: number) {
    this.activities = this.activities.filter(activity => activity.id !== activityId);
  }

  deleteTransportationOption(transportationOptionId: number) {
    this.transportationOptions = this.transportationOptions.filter(transportationOption => transportationOption.id !== transportationOptionId);
  }
}
