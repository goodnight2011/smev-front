import {AfterViewInit, Component, OnInit, Type, ViewChild} from '@angular/core';
import {ChipsLineComponent} from '../../common-utils/chips-line/chips-line.component';
import {ChargeFilter, FilterFormComponent} from '../filter-form/filter-form.component';
import {CodeWithValue} from '../../common-utils/code-with-value';
import {ChargePreview} from '../charge';
import {DataHolder} from '../../common-utils/data-holder';
import {DataHolderStrComponent} from '../../common-utils/data-holder-str/data-holder-str.component';
import {AmountResolver, ColProps, DataResoler, TableFldComponent, ViewParams} from '../../common-utils/table-fld/table-fld.component';

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

  amountOfAll: number = 50;

  amountResolver: AmountResolver = {
    resolve: () => new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.amountOfAll), 2000);
    })
  };

  dataResolver: DataResoler<ChargePreview> = {
    resolve: viewParams => new Promise<ChargePreview[]>((res, rej) => {
      setTimeout(() => res(ChargePreview.generate(viewParams.pageSize, viewParams.pageIndex*viewParams.pageSize)), 2000);
    })
  };

  colProps: ColProps<ChargePreview>[] = [{
    title: 'УИН',
    code: 'uin',
    sortable: true,
    template: DataHolderStrComponent,
    params: {fldName: 'uin'}
  }, {
    title: 'ИНН',
    code: 'inn',
    sortable: true,
    template: DataHolderStrComponent,
    params: {fldName: 'inn'}
  }, {
    title: 'КПП',
    code: 'kpp',
    sortable: true,
    template: DataHolderStrComponent,
    params: {fldName: 'kpp'}
  }, {
    title: 'Номер аттестата аккредитации',
    code: 'accName',
    sortable: true,
    template: DataHolderStrComponent,
    params: {fldName: 'accName'}
  }, {
    title: 'Сумма платежа',
    code: 'summ',
    sortable: true,
    template: DataHolderStrComponent,
    params: {fldName: 'summ'}
  }
  ];
  displayedColumns: string[] = this.colProps.map(prop => prop.code);
  viewParams: ViewParams = new ViewParams();

  @ViewChild(TableFldComponent) table: TableFldComponent<ChargePreview>;

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
  }

}
