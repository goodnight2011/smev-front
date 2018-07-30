import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StrFieldConfig} from '../../common-utils/str-field/str-field.component';
import {DateFldConfig} from '../../common-utils/date-field/date-field.component';
import {CodeWithValue} from '../../common-utils/code-with-value';
import {DateFieldAdapter} from '../../common-utils/date-field/date-field.adapter';
import {NativeDateAdapter} from '@angular/material';
import {Observable, Subject} from 'rxjs';

export class ChargeFilter {
  uin?: string;
  inn?: string;
  nakk?: string;
  summ?: string;
  nameakk?: string;
  from?: Date;
  to?: Date;
}

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  value = new ChargeFilter();
  uinConfig: StrFieldConfig = {title: 'УИН', mask: {format: '[0-9].*'}};
  innConfig: StrFieldConfig = {title: 'ИНН', mask: {format: '[0-9].*', maxLength: 12}};
  nakkConfig: StrFieldConfig = {title: 'Номер аттестата аккредитации'};
  nameakkConfig: StrFieldConfig = {title: 'Наименование аккредитованного лица'};
  summConfig: StrFieldConfig = {title: 'Сумма платежа', mask: {format: '[0-9\.].*'}};
  fromConfig: DateFldConfig = {title: 'Дата начисления от'};
  toConfig: DateFldConfig = {title: 'Дата начисления до'};
  filtersTitles: CodeWithValue[] = [];
  configs = {
    uin: this.uinConfig,
    inn: this.innConfig,
    nakk: this.nakkConfig,
    nameakk: this.nameakkConfig,
    summ: this.summConfig,
    from: this.fromConfig,
    to: this.toConfig
  };
  filtersValues: Subject<ChargeFilter> = new Subject<ChargeFilter>();


  constructor() {
  }

  ngOnInit() {
  }

  indexOF(code: string): number {
    let dateIndex = -1;
    this.filtersTitles.find((elem, i) => {
      if (elem.code === code) {
        dateIndex = i;
        return true;
      }
      return false;
    });
    return dateIndex;
  }

  updateValue(code: string, value: string | Date): void {
    this.value[code] = value;
    this.filtersValues.next(this.value);
    this.filtersTitles = this.filtersTitles.slice();
    if (code === 'from' || code === 'to') {
      let dateIndex = this.indexOF('date');
      let dateElem = dateIndex == -1 ? null : this.filtersTitles[dateIndex];

      if (this.value.from || this.value.to) {
        let fromTitle = this.value.from ? ' от: ' + DateFieldAdapter.formatIt(this.value.from, 'input') : '';
        let toTitle = this.value.to ? ' до ' + DateFieldAdapter.formatIt(this.value.to, 'input') : '';
        let title = 'Дата начисления' + fromTitle + toTitle;
        if (!dateElem)
          this.filtersTitles.push({code: 'date', value: title});
        else
          dateElem.value = title;
      }
      else {
        if (dateElem)
          this.filtersTitles.splice(dateIndex, 1);
      }
    }
    else {
      let indexof = this.indexOF(code);
      if (value) {
        let title = this.configs[code].title + ':' + value;
        if (indexof == -1)
          this.filtersTitles.push({code: code, value: title});
        else this.filtersTitles[indexof].value = title;
      }
      else {
        if (indexof != -1)
          this.filtersTitles.splice(indexof, 1);
      }
    }
  }

  remove(code: string): void {
    let indexof = this.indexOF(code);
    if (code === 'date') {
      delete this.value.from;
      delete this.value.to;
      this.value = Object.create(this.value);
    }
    else
      this.value[code] = null;
    if (indexof != -1) this.filtersTitles.splice(indexof, 1);
  }

  removeAll(): void {
    this.value = new ChargeFilter();
    this.filtersTitles = [];
  }
}
