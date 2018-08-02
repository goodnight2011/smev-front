import {AfterViewInit, Component, OnInit, Type, ViewChild} from '@angular/core';
import {ChipsLineComponent} from '../../common-utils/chips-line/chips-line.component';
import {ChargeFilter, FilterFormComponent} from '../filter-form/filter-form.component';
import {CodeWithValue} from '../../common-utils/code-with-value';
import {ChargePreview} from '../charge';
import {DataHolder} from '../../common-utils/data-holder';
import {DataHolderStrComponent} from '../../common-utils/data-holder-str/data-holder-str.component';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit, AfterViewInit {

  @ViewChild(ChipsLineComponent) chips: ChipsLineComponent;
  @ViewChild(FilterFormComponent) filters: FilterFormComponent;
  date: Date;
  uin: string;
  charge: ChargePreview = {
    status: 'status',
    uin: 'uin',
    chargeDate: new Date(),
    summ: '100500',
    protocolDate: new Date(),
    protocolNumber: 'protocolNumber',
  };

  chargeUinTemplate: Type<DataHolder<ChargePreview>> = DataHolderStrComponent;
  chargeUinParams: any = {fldName: 'uin'};

  constructor() {
  }

  ngAfterViewInit(): void {
    // this.filters.filtersValues.subscribe(value => this.uin = value.uin);
  }

  ngOnInit() {
  }

  mutateDate(): void {
    this.date = new Date();
  }

}
