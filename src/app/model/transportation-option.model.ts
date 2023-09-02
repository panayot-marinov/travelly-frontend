import {TransportationOptionType} from "../enums/transportation-option-type";

export interface TransportationOption {
  id: number;
  type: TransportationOptionType;
  duration: Date;
  price: number;
}
