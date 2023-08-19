import {Item} from "./item.model";
import {User} from "./user.model";

export class TripListModel {
  id: number;
  name: string;
  destination: string;
  // startDate: Date;
  // endDate: Date;

  constructor(id: number, name: string, destination: string,
                //string, startDate: Date, endDate: Date
) {
    this.id = id;
    this.name = name;
    this.destination = destination;
    // this.startDate = startDate;
    // this.endDate = endDate;
  }
}
