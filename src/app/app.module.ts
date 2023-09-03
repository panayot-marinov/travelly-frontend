import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';

import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {TripListComponent} from './trip-list/trip-list.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RegistrationComponent} from "./registration/registration.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MapComponent} from "./map/map.component";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { ReactiveFormsModule } from '@angular/forms';
import { TripViewEditComponent } from './trip-view-edit/trip-view-edit.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { TripCreateComponent } from './trip-create/trip-create.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ItineraryCreateComponent } from './itinerary-create/itinerary-create.component';
import {MatSelectModule} from "@angular/material/select";
import { ItineraryViewEditComponent } from './itinerary-view-edit/itinerary-view-edit.component';
import { ItineraryListComponent } from './itinerary-list/itinerary-list.component';
import {TimelineComponent} from "./timeline/timeline.component";
import { AccommodationFilterDialogComponent } from './accommodation-filter-dialog/accommodation-filter-dialog.component';
import { ActivityFilterDialogComponent } from './activity-filter-dialog/activity-filter-dialog.component';
import { TransportationOptionFilterDialogComponent } from './transportation-option-filter-dialog/transportation-option-filter-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TripListComponent,
    LoginComponent,
    RegistrationComponent,
    MapComponent,
    TripViewEditComponent,
    TripCreateComponent,
    AboutComponent,
    ContactComponent,
    ItineraryCreateComponent,
    ItineraryViewEditComponent,
    ItineraryListComponent,
    AccommodationFilterDialogComponent,
    ActivityFilterDialogComponent,
    TransportationOptionFilterDialogComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    LeafletModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
