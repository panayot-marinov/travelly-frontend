import {Item} from "./item.model";
import {User} from "./user.model";

export class TripDetailsModel {
  id: number;
  name: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  interests: string;
  items: Item[]= [];
  users: User[] = [];

  constructor(id: number, name: string, destination: string,
              startDate: Date, endDate: Date, budget: number,
              interests: string, items: Item[], users: User[]
  ) {
    this.id = id;
    this.name = name;
    this.destination = destination;
    this.startDate = startDate;
    this.endDate = endDate;
    this.budget = budget;
    this.interests = interests;
    this.items = items;
    this.users = users;
  }
}
