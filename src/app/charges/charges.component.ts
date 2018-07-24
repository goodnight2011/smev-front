import { Component, OnInit } from '@angular/core';
import {StrFieldConfig} from '../common-utils/str-field/str-field.component';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {

  strValue:string ='';
  strConfig: StrFieldConfig = {placeholder: 'placeholder', title: 'title', mask: {format: '[0-9]*', maxLength: 4}};

  constructor() { }

  ngOnInit() {
  }

}
