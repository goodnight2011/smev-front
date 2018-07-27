import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors, Validators} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';

export class StrFieldConfig {
  placeholder?: string;
  title?: string;
  mask?: Mask;
  hint?: string;
  validators?: FldValidator[];
}

export class Mask {
  format?: string;
  maxLength?: number;
}

export class FldValidator {
  code: string;
  predicate: (value: string) => boolean;
  text: string;
}

@Component({
  selector: 'app-str-field',
  templateUrl: './str-field.component.html',
  styleUrls: ['./str-field.component.css']
})
export class StrFieldComponent implements OnInit {

  @Input() config: StrFieldConfig;
  @Input() value: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  protected formField;

  validate(control: AbstractControl): ValidationErrors {
    if (!(this && this.config && this.config.validators))
      return {};

    let ret = {};
    this.config.validators.forEach(each => {
      if (!each.predicate(control.value))
        ret[each.code] = true;
    });

    return ret;
  }

  constructor() {
    this.formField = new FormControl('', control => this.validate(control));
  }

  ngOnInit() {
  }

  protected onValueChanges(fld: any): void {
    if (fld.value && fld.value.trim().length !== 0) {
      let format = this.config.mask && this.config.mask.format;
      let maxLength = this.config.mask && this.config.mask.maxLength;

      let incorrect = format && !new RegExp('^' + format + '$').test(fld.value)
        || maxLength && fld.value.length > maxLength;

      if (incorrect) {
        fld.value = this.value;
        return;
      }
    }

    this.value = fld.value;
    this.valueChange.emit(fld.value);
  }


  errors(): FldValidator[] {
    if (!this.formField.errors || !this.config || !this.config.validators)
      return [];

    let ret: FldValidator[] = [];
    this.config.validators.forEach(each => {
      if (this.formField.errors[each.code])
        ret.push(each);
    });
    return ret;
  }

}
