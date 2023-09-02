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
import {TripListItemComponent} from './trip-list-item/trip-list-item.component';
import {TripDetailsComponent} from './trip-details/trip-details.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RegistrationComponent} from "./registration/registration.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AddItemDialogComponent} from './add-item-dialog/add-item-dialog.component';
import {EditItemDialogComponent} from './edit-item-dialog/edit-item-dialog.component';
import {DeleteItemDialogComponent} from './delete-item-dialog/delete-item-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ItemListComponent} from './item-list/item-list.component';
import {DeleteTripDialogComponent} from './delete-trip-dialog/delete-trip-dialog.component';
import {MatInputModule} from "@angular/material/input";
import {AddTripDialogComponent} from "./add-trip-dialog/add-trip-dialog.component";
import {EditTripDialogComponent} from "./edit-trip-dialog/edit-trip-dialog.component";
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TripListComponent,
    TripListItemComponent,
    TripDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    ItemListComponent,
    DeleteTripDialogComponent,
    AddItemDialogComponent,
    EditItemDialogComponent,
    DeleteItemDialogComponent,
    AddTripDialogComponent,
    EditTripDialogComponent,
    DeleteTripDialogComponent,
    MapComponent,
    TripViewEditComponent,
    TripCreateComponent,
    AboutComponent,
    ContactComponent,
    ItineraryCreateComponent,
    ItineraryViewEditComponent,
    ItineraryListComponent
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
