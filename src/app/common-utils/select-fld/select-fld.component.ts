import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CodeWithValue} from '../code-with-value';
import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';
import {FldValidator} from '../str-field/str-field.component';

export class SelectValidator {
  code: string;
  predicate: (value: CodeWithValue) => boolean;
  text: string;
}

@Component({
  selector: 'app-select-fld',
  templateUrl: './select-fld.component.html',
  styleUrls: ['./select-fld.component.css']
})
export class SelectFldComponent<T extends CodeWithValue> implements OnInit {

  @Input() placeholder?: string;
  @Input() hint?: string;
  @Input() validators?: SelectValidator[];
  @Input() options: T[];
  @Input() selected?: T;
  @Input() title?: string;
  formControl: FormControl  = new FormControl('', control => this.validate(control));
  @Output() selectedChange: EventEmitter<T> = new EventEmitter<T>();

  validate(control: AbstractControl): ValidationErrors {
    if (!this.validators)
      return {};

    let ret = {};
    this.validators.forEach(each => {
      if (!each.predicate(control.value))
        ret[each.code] = true;
    });

    return ret;
  }


  errors(): SelectValidator[] {
    if (!this.formControl.errors || !this.validators)
      return [];

    let ret: SelectValidator[] = [];
    this.validators.forEach(each => {
      if (this.formControl.errors[each.code])
        ret.push(each);
    });
    return ret;
  }
  constructor() { }

  ngOnInit() {
  }

  valueChange(value: T):void{
    this.selected = value;
    this.selectedChange.emit(value);
  }

}
