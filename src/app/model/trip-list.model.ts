import {Item} from "./item.model";
import {User} from "./user.model";

export class TripList {
  id: number;
  name: string;
  destination: string;
  startDate: number[];
  endDate: number[];

  constructor(id: number, name: string, destination: string, startDate: number[], endDate: number[]) {
    this.id = id;
    this.name = name;
    this.destination = destination;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
