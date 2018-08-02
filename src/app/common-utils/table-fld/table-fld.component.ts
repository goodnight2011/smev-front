import {Component, Input, OnInit} from '@angular/core';
import {DataHolder} from '../data-holder';

export class ColProps<T>{
  title: string;
  code: string;
  sortable: boolean;
  cellRenderer: DataHolder<T>;
}

@Component({
  selector: 'app-table-fld',
  templateUrl: './table-fld.component.html',
  styleUrls: ['./table-fld.component.css']
})
export class TableFldComponent<T> implements OnInit {
  data: T[];
  @Input() colProps: ColProps<T>[];

  constructor() {
  }

  ngOnInit() {
  }

}
