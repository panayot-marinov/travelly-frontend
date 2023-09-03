import {ActivityType} from "../enums/activity-type";

export interface ActivityMap {
  type: ActivityType;
  location: string;
  startTime: Date;
  endTime: Date;
  latitude: number;
  longitude: number;
}
