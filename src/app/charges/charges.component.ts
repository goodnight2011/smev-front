import {Component, OnInit} from '@angular/core';
import {FldValidator, StrFieldConfig} from '../common-utils/str-field/str-field.component';
import {ChipsLineComponent} from '../common-utils/chips-line/chips-line.component';
import {CodeWithSourceMap} from 'codelyzer/angular/metadata';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {

  values: any[] = [{value: 'one', code: 'one'}, {value: 'two', code: 'two'}, {value: 'three', code: 'three'}];
  strValue: string = '';
  strConfig: StrFieldConfig = {
    placeholder: 'placeholder',
    title: 'title',
    mask: {
      format: '[0-9]*',
      maxLength: 4
    },
    validators: [{
      code: 'empty',
      predicate: value => value.length == 0,
      text: 'empty field'
    }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
