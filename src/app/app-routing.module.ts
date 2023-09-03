import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripListComponent} from "./trip-list/trip-list.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {TripViewEditComponent} from "./trip-view-edit/trip-view-edit.component";
import {TripCreateComponent} from "./trip-create/trip-create.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {TimelineComponent} from "./timeline/timeline.component";
import {ItineraryCreateComponent} from "./itinerary-create/itinerary-create.component";
import {ItineraryListComponent} from "./itinerary-list/itinerary-list.component";
import {ItineraryViewEditComponent} from "./itinerary-view-edit/itinerary-view-edit.component";
import {MapComponent} from "./map/map.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/trips', pathMatch: 'full' },
  { path: 'trips', component: TripListComponent },
  { path: 'trips/:tripId', component: TripViewEditComponent },
  { path: 'users/:userId/trips', component: TripCreateComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'itineraries/:itineraryId', component: ItineraryViewEditComponent },
  { path: 'trips/:tripId/itineraries-create', component: ItineraryCreateComponent },
  { path: 'trips/:tripId/itineraries', component: ItineraryListComponent },
  { path: 'map', component: MapComponent },
  { path: 'map/:itineraryId', component: MapComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
