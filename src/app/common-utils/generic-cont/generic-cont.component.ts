import {Component, Input, OnInit} from '@angular/core';
import {DataHolder} from '../data-holder';

@Component({
  selector: 'app-generic-cont',
  templateUrl: './generic-cont.component.html',
  styleUrls: ['./generic-cont.component.css']
})
export class GenericContComponent<T> implements OnInit {

  @Input() data: T;
  @Input() template: DataHolder<T>;
  @Input() params?: any ;

  constructor() { }

  ngOnInit() {
  }

}
