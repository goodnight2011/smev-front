import {Component, EventEmitter, Input, OnInit, Output, Type, ViewChild} from '@angular/core';
import {DataHolder} from '../data-holder';
import {Observable} from 'rxjs';
import {MatPaginator, MatSort, SortDirection} from '@angular/material';

export class ColProps<T> {
  title: string;
  code: string;
  sortable: boolean;
  template: Type<DataHolder<T>>;
  params?: any;
}

export class ViewParams {
  sortBy?: string & SortDirection;
  pageIndex: number = 0;
  pageSize: number = 20;
}

@Component({
  selector: 'app-table-fld',
  templateUrl: './table-fld.component.html',
  styleUrls: ['./table-fld.component.css']
})
export class TableFldComponent<T> implements OnInit {
  @Input() colProps: ColProps<T>[];
  @Output() viewParamsChange: EventEmitter<ViewParams> = new EventEmitter<ViewParams>();
  received: T[] = [];
  amountOfAll: number = 0;

  @Input() displayedColumns: string[];
  @Input() data: Observable<T[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() viewParams: ViewParams = new ViewParams();

  constructor() {
  }

  ngOnInit() {

  }

}
