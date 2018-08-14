import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EditMode} from '../edit-mode';
import {ChargeEditModel} from './charge-edit-model';
import {Charge} from '../charge';
import {CodeWithValue} from '../../common-utils/code-with-value';
import {Observable, of} from 'rxjs';
import {HintUpdater, StrFieldConfig} from '../../common-utils/str-field/str-field.component';

@Component({
  selector: 'app-edit-charge',
  templateUrl: './edit-charge.component.html',
  styleUrls: ['./edit-charge.component.css']
})
export class EditChargeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  id: string;
  chargeModel: ChargeEditModel = {
    charge: new Charge(),
    editMode: EditMode.Create
  };

  ngOnInit() {
    this.chargeModel.charge.uin = this.route.snapshot.paramMap.get('id');
    this.chargeModel.charge.sendDate = new Date("2018-08-01");
  }

  hintsRevoler: HintUpdater<string> = new HintUpdater<string>(str => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res.apply([str, str + " " + str, str + " " + str + " " + str]);
      }, 2000);
    });
  }, 'another');

  fldConfig: StrFieldConfig = {
    placeholder: 'enter text',
    title: 'test text',
    hintsProvider: this.hintsRevoler.observable
  };

}
