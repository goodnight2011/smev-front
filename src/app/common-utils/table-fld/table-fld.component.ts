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

export class DataCell<T> {
  data: T[];
  promise: Promise<T[]>;
}

export interface DataResoler<T> {
  resolve(params: ViewParams): Promise<T[]>;
}

export interface AmountResolver {
  resolve(): Promise<number>;
}

@Component({
  selector: 'app-table-fld',
  templateUrl: './table-fld.component.html',
  styleUrls: ['./table-fld.component.css']
})
export class TableFldComponent<T> implements OnInit {
  @Input() colProps: ColProps<T>[];
  @Input() dataResolver: DataResoler<T>;
  @Input() amountResolver: AmountResolver;

  @Output() viewParamsChange: EventEmitter<ViewParams> = new EventEmitter<ViewParams>();

  amountOfAll: number;
  data: { [key: number ]: T[] };
  currentData: T[];
  currentViewParams: ViewParams = new ViewParams();

  loadingData: boolean;
  loadingAmount: boolean;

  version: number = 0;
  error: Error = null;

  @Input() displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input()
  set viewParams(params: ViewParams) {
    this.currentViewParams = params;
    this.invalidate();
  }

  constructor() {
  }

  ngOnInit() {
    this.invalidate();
  }

  invalidate(): void {
    this.amountOfAll = 0;
    this.data = {};
    this.currentData = [];
    this.loadingData = true;
    this.loadingAmount = true;
    this.version = this.version + 1;
    this.error = null;
    this.resolve();
    let currentVersion = this.version;
    this.amountResolver.resolve().then(
      amount => {
        if (currentVersion === this.version) {
          this.amountOfAll = amount;
          this.loadingAmount = false;
        }
      }, err => this.resolveError(currentVersion, err)
    );
  }

  onSortChange(sort: Sort) {
    this.currentViewParams.sortByColumn = sort.active;
    this.currentViewParams.sortByDirection = sort.direction;
    this.invalidate();
  }


  resolveDataSet(index: number, version: number, values: T[]) {
    if (this.version === version) {
      this.data[index] = values;
      if (this.currentViewParams.pageIndex === index) {
        this.currentData = values;
        this.loadingData = false;
      }
    }
  }

  resolveError(version: number, error: Error) {
    if (this.version === version) {
      this.loadingAmount = false;
      this.loadingData = false;
      this.error = error;
    }
  }

  resolve() {
    let currentIndex = this.currentViewParams.pageIndex;
    let currentVersion = this.version;

    if (this.data[currentIndex])
      this.resolveDataSet(currentIndex, currentVersion, this.data[currentIndex]);
    else {
      this.loadingData = true;
      if (this.data[currentIndex] === undefined) {
        this.data[currentIndex] = null;
        this.dataResolver.resolve(this.currentViewParams).then(
          values => this.resolveDataSet(currentIndex, currentVersion, values),
          err => this.resolveError(currentVersion, err)
        );
      }
    }
  }

  onPageChange(pageEv: PageEvent) {
    this.currentViewParams.pageSize = pageEv.pageSize;
    this.currentViewParams.pageIndex = pageEv.pageIndex;
    if (this.currentViewParams.pageSize !== pageEv.pageSize)
      this.invalidate();
    else this.resolve();
  }

}
