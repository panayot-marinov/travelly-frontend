import {Trip} from "./trip.model";

export class User {
  id: number;
  email: string;
  username: string;
  password: string;
  trips: Trip[] = [];

  constructor(id: number, email: string, username: string, password: string, trips: Trip[]) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.trips = trips;
  }
}
