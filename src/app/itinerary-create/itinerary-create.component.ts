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

@Component({
  selector: 'app-itinerary-create',
  templateUrl: './itinerary-create.component.html',
  styleUrls: ['./itinerary-create.component.css']
})
export class ItineraryCreateComponent {
  tripId = -1;
  itinerary: Itinerary = new Itinerary(0, 0);
  accommodations: Accommodation[] = [{ id: 0, name: '', address: '', city: '', pricePerNight: 0 }];
  activities: Activity[] = [{ id: 0, type: ActivityType.LEARNING, location: '', startTime: new Date(), endTime: new Date(), description: '' }];
  transportationOptions: TransportationOption[] = [{ id: 0, type: TransportationOptionType.BUS, duration: new Date(), price: 0 }];

  activityTypes = Object.values(ActivityType);
  transportationOptionTypes = Object.values(TransportationOptionType);

  constructor(private itineraryService: ItineraryService, private tripService: TripService, private route: ActivatedRoute) {}

  addAccommodation() {
    this.accommodations.push({ id: 0, name: '', address: '', city: '', pricePerNight: 0 });
  }

  addActivity() {
    this.activities.push({ id: 0, type: ActivityType.LEARNING, location: '', startTime: new Date(), endTime: new Date(), description: '' });
  }

  addTransportationOption() {
    this.transportationOptions.push({ id: 0, type: TransportationOptionType.BUS, duration: new Date(), price: 0 });
  }

  addItinerary() {

    this.route.paramMap.subscribe(params => {
      const tripIdParam = params.get('tripId');
      if (tripIdParam !== null) {
        this.tripId = +tripIdParam;

        console.log(this.tripId)
        this.tripService.addItinerary(this.tripId, this.itinerary).subscribe(
          (itineraryId: number) => {
            this.itineraryService.setItineraryId(itineraryId)
            this.itineraryService.addAccommodations(this.accommodations).subscribe();
            this.itineraryService.addActivities(this.activities).subscribe();
            this.itineraryService.addTransportationOptions(this.transportationOptions).subscribe();
          }
        );

      }
    });
  }
}
