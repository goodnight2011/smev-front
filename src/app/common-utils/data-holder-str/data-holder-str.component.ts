import {Component, Input, OnInit} from '@angular/core';
import {DataHolder} from '../data-holder';

@Component({
  selector: 'app-data-holder-str',
  templateUrl: './data-holder-str.component.html',
  styleUrls: ['./data-holder-str.component.css']
})
export class DataHolderStrComponent<T> implements OnInit, DataHolder<T> {
  @Input() data: T;
  @Input() params?: any;

  constructor() { }

  ngOnInit() {
  }

}
