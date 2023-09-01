import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripListComponent} from "./trip-list/trip-list.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {TripViewEditComponent} from "./trip-view-edit/trip-view-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/trips', pathMatch: 'full' },
  { path: 'trips', component: TripListComponent },
  { path: 'trips/:tripId', component: TripViewEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
