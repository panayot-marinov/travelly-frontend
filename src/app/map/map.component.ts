import {Component, NgModule} from '@angular/core';
import {Map, circle, latLng, marker, polygon, tileLayer, LeafletMouseEvent} from "leaflet";
import {ActivityType} from "../enums/activity-type";
import {TransportationOptionType} from "../enums/transportation-option-type";
import {ItineraryService} from "../service/itinerary.service";
import {Itinerary} from "../model/itinerary.model";
import {DateService} from "../service/date.service";
import {ActivatedRoute} from "@angular/router";
import {TripService} from "../service/trip.service";
import {ActivityMap} from "../model/activity-map.model";
import {iconDefault} from "../../conifg/leaflet-config"
import * as L from 'leaflet';
import {TransportationOptionMap} from "../model/transportation-option-map.model";
import {AccommodationMap} from "../model/accommodation-map.model";

const baseMapLayer = L.layerGroup();

const baseLayers = {
  'Map Layer': baseMapLayer, // Replace with your base map layer
};

const accommodationLayer = L.layerGroup();
const activityLayer = L.layerGroup();
const transportationOptionLayer = L.layerGroup();


const overlays = {
  'Accommodations': accommodationLayer,
  'Activities': activityLayer,
  'Transportation': transportationOptionLayer,
};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  markers: L.Marker[] = [];
  itineraryId: number = -1;
  itinerary: Itinerary = new Itinerary(0, 0);
  accommodations: AccommodationMap[] = [];
  activities: ActivityMap[] = [];
  transportationOptions: TransportationOptionMap[] = [];

  activityTypes = Object.values(ActivityType);
  transportationOptionTypes = Object.values(TransportationOptionType);

  myMap: Map | null = null;

  constructor(private itineraryService: ItineraryService,
              private tripService: TripService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Create a Leaflet map
    this.myMap = new Map('myMap').setView([51.505, -0.09], 13);
    L.control.layers(baseLayers, overlays).addTo(this.myMap);
    accommodationLayer.addTo(this.myMap);
    activityLayer.addTo(this.myMap);
    transportationOptionLayer.addTo(this.myMap);


    // Add a tile layer to the map (e.g., OpenStreetMap)
    if (this.myMap) {
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(this.myMap);


    }

    this.route.paramMap.subscribe(params => {
      const itineraryIdParam = params.get('itineraryId');
      if (itineraryIdParam !== null) {
        this.itineraryId = +itineraryIdParam;

        this.itineraryService.getItineraryById(this.itineraryId).subscribe(
          (itinerary: Itinerary) => {
            this.itinerary = itinerary;
          }
        );

        this.itineraryService.getMapAccommodations(this.itineraryId).subscribe(
          (accommodations: any[]) => {
            this.accommodations = accommodations;
            console.log(accommodations);
            this.addMarkersForAccommodations();
          });

        this.itineraryService.getMapActivities(this.itineraryId)
          .subscribe((activities: any[]) => {
            this.activities = activities.map(activity => {
              activity.startTime = DateService.convertNumberArrayToDate(activity.startTime);
              activity.endTime = DateService.convertNumberArrayToDate(activity.endTime);
              return activity;
            });
            console.log(activities);
            this.addMarkersForActivities();
          });

        this.itineraryService.getMapTransportationOptions(this.itineraryId)
          .subscribe((transportationOptions: any[]) => {
            this.transportationOptions = transportationOptions;
            console.log(transportationOptions);
            this.addMarkersForTransportationOptions();
          });

      }
    });
  }

  addMarkersForActivities() {
    // Add markers for activities
    this.activities.forEach((activity) => {
      console.log('Adding marker for activity:', activity);

      L.marker([activity.latitude, activity.longitude], {icon: L.icon(iconDefault)})
        .addTo(activityLayer)
        .bindPopup(`<b>${activity.type}</b><br>${activity.location}`)
        .openPopup();
    });
  }

  addMarkersForAccommodations() {
    // Add markers for accommodations
    this.accommodations.forEach((accommodation) => {
      console.log('Adding marker for accommodation:', accommodation);

      L.marker([accommodation.latitude, accommodation.longitude], {icon: L.icon(iconDefault)})
        .addTo(accommodationLayer)
        .bindPopup(`<b>${accommodation.city}</b><br>${accommodation.pricePerNight}`)
        .openPopup();
    });
  }

  addMarkersForTransportationOptions() {
    this.transportationOptions.forEach((transportationOption) => {
      console.log('Adding marker for transportation option:', transportationOption);

      L.marker([transportationOption.latitude, transportationOption.longitude], {icon: L.icon(iconDefault)})
        .addTo(transportationOptionLayer)
        .bindPopup(`<b>${transportationOption.type}</b><br>${transportationOption.price}`)
        .openPopup();
    });
  }
}
