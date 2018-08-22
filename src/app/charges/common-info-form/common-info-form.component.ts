import {Component, Input, OnInit} from '@angular/core';
import {ChargesModule} from '../charges.module';
import {ChargeEditModel} from '../edit-charge/charge-edit-model';
import {CodeWithValue} from '../../common-utils/code-with-value';

@Component({
  selector: 'app-common-info-form',
  templateUrl: './common-info-form.component.html',
  styleUrls: ['./common-info-form.component.css']
})
export class CommonInfoFormComponent implements OnInit {

  @Input() model: ChargeEditModel;
  kbkItems: CodeWithValue[] = [
    {
      code: '16511690010016000140',
      value: 'Оплата прочих денежных взысканий (штрафов) и иных сумм'
    }, {
      code: '16511607000016000140',
      value: 'Оплата денежных взысканий (штрафов)'
    }, {
      code: '16510807200010039110',
      value: 'Оплата государственной пошлины'
    }, {
      code: '16511301991016000130',
      value: 'Оплата за проведение инспекции, предварительной (полной) инспекции'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
