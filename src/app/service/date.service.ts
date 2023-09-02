import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  static convertNumberArrayToDate(dateArray: number[]): Date {
    if (dateArray.length < 6) {
      throw new Error('Invalid date array format');
    }
    const [year, month, day, hour, minute, second, nanoseconds] = dateArray;

    return new Date(year, month - 1, day, hour, minute, second, nanoseconds / 1000000);
  }

}
