import {Component, Input, OnInit} from '@angular/core';
import {TripListModel} from "../model/trip-list.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trip-list-item',
  templateUrl: './trip-list-item.component.html',
  styleUrls: ['./trip-list-item.component.css']
})
export class TripListItemComponent implements OnInit {
  title: string = 'adqwqeqwewqq';
  @Input() trip!:TripListModel;

  public ngOnInit(): void {
    console.log('Pesho');
  }

  public loadTripDetails(tripId: number): void {
    this.router.navigate(['/trips', tripId]);
  }

  constructor(
    private router: Router
  ) {
  }
}
