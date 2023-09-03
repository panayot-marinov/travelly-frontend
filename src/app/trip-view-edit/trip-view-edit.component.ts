import { Component } from '@angular/core';
import {Trip} from "../model/trip.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TripService} from "../service/trip.service";
import {DateService} from "../service/date.service";
import {Item} from "../model/item.model";
import {ItemService} from "../service/item.service";

@Component({
  selector: 'app-trip-view-edit',
  templateUrl: './trip-view-edit.component.html',
  styleUrls: ['./trip-view-edit.component.css']
})
export class TripViewEditComponent {
  tripId: number = -1;
  trip: Trip = new Trip(
    0,
    '',
    '',
    new Date(),
    new Date(),
    0,
    '',
    []
  );

  constructor(private route: ActivatedRoute,
              private tripService: TripService,
              private itemService: ItemService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tripIdParam = params.get('tripId');
      if (tripIdParam !== null) {
        this.tripId = +tripIdParam;
        console.log(this.trip)

        this.tripService.getTripById(this.tripId).subscribe(
          (trip: any) => {
            this.trip = trip;
            this.trip.startDate = DateService.convertNumberArrayToDate(trip.startDate);
            this.trip.endDate = DateService.convertNumberArrayToDate(trip.endDate);
            this.tripService.getItems(this.tripId).subscribe(
              (items: Item[]) => {
                this.trip.items = items;
                console.log(items)
              }
            )
          });

      }});
  }

  updateTrip() {
    this.tripService.updateTrip(this.trip).subscribe();
    this.tripService.addItems(this.trip.id, this.trip.items).subscribe();
  }

  redirectToItinerariesPage() {
    this.router.navigate(['/trips/', this.tripId, "itineraries"]);
  }

  addItem() {
    this.trip.items.push({ id: 0, name: '', description: '', amount: 0, isPacked: false });
  }

  deleteItem(itemId: number) {
    this.itemService.deleteItemById(itemId).subscribe();
    this.trip.items = this.trip.items.filter(item => item.id !== itemId);
  }

}

