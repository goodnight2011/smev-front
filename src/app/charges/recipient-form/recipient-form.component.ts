///<reference path="../../common-utils/code-with-value.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import {CodeWithValue} from '../../common-utils/code-with-value';
import {ALL_RECIPIENTS, Recipient} from '../recipient';
import {ChargeEditModel} from '../edit-charge/charge-edit-model';

@Component({
  selector: 'app-recipient-form',
  templateUrl: './recipient-form.component.html',
  styleUrls: ['./recipient-form.component.css']
})
export class RecipientFormComponent implements OnInit {
  @Input() chargeModel: ChargeEditModel;
  recepientsOptions: Recipient[] = ALL_RECIPIENTS;
  showDetails: boolean = true;

  expandDetails(): void {
    this.showDetails = !this.showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

  selectRecipient($event: Recipient) {
    this.chargeModel.charge.recipient = $event;
  }
}
