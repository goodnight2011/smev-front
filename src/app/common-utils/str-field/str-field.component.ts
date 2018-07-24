import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

export class StrFieldConfig{
  placeholder?: string;
  title?: string;
  mask?: Mask;
}

export class Mask{
  format?: string;
  maxLength?: number;
}

@Component({
  selector: 'app-str-field',
  templateUrl: './str-field.component.html',
  styleUrls: ['./str-field.component.css']
})
export class StrFieldComponent implements OnInit {

  @Input() config: StrFieldConfig = new StrFieldConfig();

  @Input() value:string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  protected onValueChanges(fld: any ):void{
    let format = this.config.mask && this.config.mask.format;
    let maxLength = this.config.mask && this.config.mask.maxLength;

    let incorrect = format && !new RegExp('^' + format + '$').test(fld.value)
      || maxLength && fld.value.length > maxLength;

    if(incorrect) {
      fld.value = this.value;
      return;
    }

    this.value = fld.value;
    this.valueChange.emit(fld.value);
  }

}
