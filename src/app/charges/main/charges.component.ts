import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChipsLineComponent} from '../../common-utils/chips-line/chips-line.component';
import {ChargeFilter, FilterFormComponent} from '../filter-form/filter-form.component';
import {CodeWithValue} from '../../common-utils/code-with-value';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit, AfterViewInit{

  @ViewChild(ChipsLineComponent) chips: ChipsLineComponent;
  @ViewChild(FilterFormComponent) filters: FilterFormComponent;
  date: Date;
  uin: string;


  constructor() {
  }

  ngAfterViewInit(): void {
    this.filters.filtersValues.subscribe(value => this.uin = value.uin);
  }

  ngOnInit() {
  }

  mutateDate(): void {
    this.date = new Date();
  }

}
