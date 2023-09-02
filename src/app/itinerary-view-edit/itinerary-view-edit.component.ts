import { Component } from '@angular/core';
import {Itinerary} from "../model/itinerary.model";
import {Accommodation} from "../model/accommodation.model";
import {Activity} from "../model/activity.model";
import {ActivityType} from "../enums/activity-type";
import {TransportationOption} from "../model/transportation-option.model";
import {TransportationOptionType} from "../enums/transportation-option-type";
import {ItineraryService} from "../service/itinerary.service";
import {TripService} from "../service/trip.service";
import {ActivatedRoute, Route} from "@angular/router";
import {DateService} from "../service/date.service";
import {Trip} from "../model/trip.model";
import {AccommodationService} from "../service/accommodation.service";
import {ActivityService} from "../service/activity.service";
import {TransportationOptionService} from "../service/transportation-option.service";

@Component({
  selector: 'app-itinerary-view-edit',
  templateUrl: './itinerary-view-edit.component.html',
  styleUrls: ['./itinerary-view-edit.component.css']
})
export class ItineraryViewEditComponent {
  itineraryId: number = -1;
  itinerary: Itinerary = new Itinerary(0, 0);
  accommodations: Accommodation[] = [{ id: 0, name: '', address: '', city: '', pricePerNight: 0 }];
  activities: Activity[] = [{ id: 0, type: ActivityType.LEARNING, location: '', startTime: new Date(), endTime: new Date(), description: '' }];
  transportationOptions: TransportationOption[] = [{ id: 0, type: TransportationOptionType.BUS, duration: new Date(), price: 0 }];

  activityTypes = Object.values(ActivityType);
  transportationOptionTypes = Object.values(TransportationOptionType);

  constructor(private itineraryService: ItineraryService,
              private tripService: TripService,
              private route: ActivatedRoute,
              private accommodationService: AccommodationService,
              private activityService: ActivityService,
              private transportationOptionService: TransportationOptionService) {}

  addAccommodation() {
    this.accommodations.push({ id: 0, name: '', address: '', city: '', pricePerNight: 0 });
  }

  addActivity() {
    this.activities.push({ id: 0, type: ActivityType.LEARNING, location: '', startTime: new Date(), endTime: new Date(), description: '' });
  }

  addTransportationOption() {
    this.transportationOptions.push({id: 0, type: TransportationOptionType.BUS, duration: new Date(), price: 0});
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const itineraryIdParam = params.get('itineraryId');
      if (itineraryIdParam !== null) {
        this.itineraryId = +itineraryIdParam;

        this.itineraryService.getItineraryById(this.itineraryId).subscribe(
          (itinerary: Itinerary) => {
            this.itinerary = itinerary;
          }
        );

        this.itineraryService.getAccommodations(this.itineraryId).subscribe(
          (accommodations: Accommodation[]) => {
            this.accommodations = accommodations;
          }
        );

        this.itineraryService.getActivities(this.itineraryId)
          .subscribe((activities: any[]) => {
            this.activities = activities.map(activity => {
              activity.startTime = DateService.convertNumberArrayToDate(activity.startTime);
              activity.endTime = DateService.convertNumberArrayToDate(activity.endTime);
              return activity;
            });
          });

        this.itineraryService.getTransportationOptions(this.itineraryId)
          .subscribe((transportationOptions: any[]) => {
            this.transportationOptions = transportationOptions.map(transportationOption => {
              transportationOption.duration = DateService.convertNumberArrayToDate(transportationOption.duration);
              return transportationOption;
            });
          });

      }
    });
  }

  updateItinerary() {
    this.itineraryService.updateItinerary(this.itinerary).subscribe(
      (response) => {
        this.accommodations.forEach((accommodation: Accommodation) => {
          this.accommodationService.updateAccommodation(accommodation).subscribe();
        });

        this.activities.forEach((activity: Activity) => {
          this.activityService.updateActivity(activity).subscribe();
        });

        this.transportationOptions.forEach((transportationOption: TransportationOption) => {
          this.transportationOptionService.updateTransportationOption(transportationOption).subscribe();
        });
      }
    );
  }
}
