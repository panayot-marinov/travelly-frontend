import {Item} from "./item.model";

export class Trip {
  id: number;
  name: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  interests: string;
  items: Item[]= [];

  constructor(id: number, name: string, destination: string,
              startDate: Date, endDate: Date, budget: number,
              interests: string, items: Item[]
  ) {
    this.id = id;
    this.name = name;
    this.destination = destination;
    this.startDate = startDate;
    this.endDate = endDate;
    this.budget = budget;
    this.interests = interests;
    this.items = items;
  }
}
