import {TransportationOptionType} from "../enums/transportation-option-type";

export interface TransportationOptionMap {
  type: TransportationOptionType;
  price: number;
  latitude: number;
  longitude: number;
}
