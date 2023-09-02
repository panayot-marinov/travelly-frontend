import {ActivityType} from "../enums/activity-type";

export interface Activity {
  id: number;
  type: ActivityType;
  location: string;
  startTime: Date;
  endTime: Date;
  description: string;
}
