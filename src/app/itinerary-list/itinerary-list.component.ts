import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TripService} from "../service/trip.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Itinerary} from "../model/itinerary.model";
import {ItineraryService} from "../service/itinerary.service";

@Component({
  selector: 'app-itinerary-list',
  templateUrl: './itinerary-list.component.html',
  styleUrls: ['./itinerary-list.component.css']
})
export class ItineraryListComponent implements OnInit {
  tripId = -1;
  itineraries: Itinerary[] = [];

  constructor(private itineraryService: ItineraryService,
              private dialog: MatDialog,
              private tripService: TripService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tripIdParam = params.get('tripId');
      if (tripIdParam !== null) {
        this.tripId = +tripIdParam;

          this.tripService.getItineraries(this.tripId).subscribe(
          (itineraries: Itinerary[]) => {
            this.itineraries = itineraries;
          });
      }});
  }

  redirectToAddItineraryPage(): void {
    this.router.navigate(['/trips/', this.tripId, "itineraries-create"]);
  }

  deleteItinerary(itineraryId: number): void {
    this.itineraryService.deleteItineraryById(itineraryId).subscribe(() => {
      this.itineraries = this.itineraries.filter(itinerary => itinerary.id !== itineraryId);
    });
  }

  navigateToItineraryDetail(itineraryId: number): void {
    this.router.navigate(['/itineraries', itineraryId]);
  }

}
