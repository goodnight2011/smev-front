import {Component, EventEmitter, Input, OnInit, Output, Type, ViewChild} from '@angular/core';
import {DataHolder} from '../data-holder';
import {Observable} from 'rxjs';
import {MatPaginator, MatSort, PageEvent, Sort, SortDirection} from '@angular/material';

export class ColProps<T> {
  title: string;
  code: string;
  sortable: boolean;
  template: Type<DataHolder<T>>;
  params?: any;
}

export class ViewParams {
  sortByColumn?: string;
  sortByDirection?: SortDirection;
  pageIndex: number = 0;
  pageSize: number = 20;
}

export interface DataResoler<T> {
  resolve(params: ViewParams): T[];
}

export interface AmountResolver {
  resolve(): number;
}

@Component({
  selector: 'app-table-fld',
  templateUrl: './table-fld.component.html',
  styleUrls: ['./table-fld.component.css']
})
export class TableFldComponent<T> implements OnInit {
  @Input() colProps: ColProps<T>[];
  @Input() dataResolver: DataResoler;
  @Input() amountResolver: AmountResolver;

  @Output() viewParamsChange: EventEmitter<ViewParams> = new EventEmitter<ViewParams>();

  amountOfAll: number;
  data: { [key: number ]: T[] };
  currentData: T[];
  currentViewParams: ViewParams = new ViewParams();
  status: string = '';

  @Input() displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input()
  set viewParams(params: ViewParams): void {
    this.currentViewParams = params;
    this.invalidate();
  }

  constructor() {
  }

  ngOnInit() {
  }

  invalidate(): void {

  }

  onSortChange(sort: Sort) {
    this.viewParams.sortByColumn = sort.active;
    this.viewParams.sortByDirection = sort.direction;
    this.invalidate();
  }

  onPageChange(pageEv: PageEvent) {
    this.viewParams.pageSize = pageEv.pageSize;
    this.viewParams.pageIndex = pageEv.pageIndex;
    if (this.viewParams.pageSize !== pageEv.pageSize)
      this.invalidate();
    else {

    }
  }

}
