import {Trip} from "./trip.model";

export class Item {
  id: number;
  trip: Trip;
  name: string;
  desc: string;
  amount: number;
  isPacked: boolean;

  constructor(id: number, trip: Trip, name: string, desc: string, amount: number, isPacked: boolean) {
    this.id = id;
    this.trip = trip;
    this.name = name;
    this.desc = desc;
    this.amount = amount;
    this.isPacked = isPacked;
  }

}
