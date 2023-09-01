import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripListComponent} from "./trip-list/trip-list.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {TripViewEditComponent} from "./trip-view-edit/trip-view-edit.component";
import {TripCreateComponent} from "./trip-create/trip-create.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/trips', pathMatch: 'full' },
  { path: 'trips', component: TripListComponent },
  { path: 'trips/:tripId', component: TripViewEditComponent },
  { path: 'users/:userId/trips', component: TripCreateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
