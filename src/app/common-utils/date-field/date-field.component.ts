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
  @Input() value: Date;
  @Input() disabled: boolean = false;
  @Output() valueChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {
  }

  ngOnInit() {
  }

  onDate(date: Date): void {
    this.valueChange.emit(date);
  }
}
