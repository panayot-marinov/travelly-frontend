import {ActivityType} from "../enums/activity-type";

export interface ActivityTimeline {
  type: ActivityType;
  location: string;
  startTime: Date;
  endTime: Date;
}
