import {Component, Input, OnInit} from '@angular/core';
import {EditMode} from '../edit-mode';
import {DateFldConfig} from '../../common-utils/date-field/date-field.component';
import {ChargesModule} from '../charges.module';
import {ChargeEditModel} from '../edit-charge/charge-edit-model';

@Component({
  selector: 'app-edit-dates',
  templateUrl: './edit-dates.component.html',
  styleUrls: ['./edit-dates.component.css']
})
export class EditDatesComponent implements OnInit {

  constructor() { }

  @Input() chargeModel: ChargeEditModel;
  chargeDateConfig: DateFldConfig = {title: 'Дата начисления'};
  sendDateConfig: DateFldConfig = {title: "Дата отсылки"};

  isSendDateDisabled(): boolean{
    return this.chargeModel.editMode === EditMode.Create;
  }

  ngOnInit() {
  }

}
