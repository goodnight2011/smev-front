import {NativeDateAdapter} from '@angular/material';

export class DateFieldAdapter extends NativeDateAdapter{

  static formatIt(date: Date, displayFormat: Object){
      if (displayFormat == "input") {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      // return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
      return year + '-' + this._to2digit(month) + '-' + this._to2digit(day);
    } else {
      return date.toDateString();
    }
  }

  format(date: Date, displayFormat: Object): string {
    return DateFieldAdapter.formatIt(date, displayFormat);
  }

  static _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}
