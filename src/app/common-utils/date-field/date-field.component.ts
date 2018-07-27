import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

export class DateFldConfig {
  placeholder?: string;
  title?: string;
}

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.css']
})
export class DateFieldComponent implements OnInit {

  @Input() config: DateFldConfig = {};
  @Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();
  date: FormControl = new FormControl(new Date());
  @Input('value') value: Date;

  constructor() {
  }

  ngOnInit() {
  }

  onDate(date: Date): void {
    this.dateChange.emit(date);
  }
}
