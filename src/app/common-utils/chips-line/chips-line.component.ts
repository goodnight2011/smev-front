import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TitleWithCode} from '../code-with-value';

@Component({
  selector: 'app-chips-line',
  templateUrl: './chips-line.component.html',
  styleUrls: ['./chips-line.component.css']
})
export class ChipsLineComponent implements OnInit {

  configure: boolean = false;
  @Input() values: TitleWithCode[] = [];
  @Output() removed: EventEmitter<string> = new EventEmitter<string>();
  @Output() removedAll: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  remove(value: TitleWithCode): void {
    this.removed.emit(value.code);
  }

  clear(): void {
    this.removedAll.emit(true);
  }

}
