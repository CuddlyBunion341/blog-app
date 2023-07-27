import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  private monthName(month: number): string {
    return [
      'January',
      'Febuary',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'Septemper',
      'October',
      'November',
      'December',
    ][month];
  }

  private dayPrefix(day: number): string {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return 'st';
      case 2:
      case 22:
        return 'nd';
      case 3:
      case 23:
        return 'rd';
      default:
        return 'th';
    }
  }

  format(date: Date): string {
    const month = this.monthName(date.getMonth());
    const day = date.getDate();
    const fullDay = `${day}${this.dayPrefix(day)}`;
    const year = date.getFullYear();

    return `${month} ${fullDay} ${year}`;
  }
}
