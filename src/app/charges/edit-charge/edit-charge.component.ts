import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EditMode} from '../edit-mode';
import {ChargeEditModel} from './charge-edit-model';
import {Charge} from '../charge';
import {CodeWithValue} from '../../common-utils/code-with-value';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {HintUpdater, StrFieldComponent, StrFieldConfig} from '../../common-utils/str-field/str-field.component';
import {debounceTime, distinctUntilChanged, map, switchAll} from 'rxjs/internal/operators';

@Component({
  selector: 'app-edit-charge',
  templateUrl: './edit-charge.component.html',
  styleUrls: ['./edit-charge.component.css']
})
export class EditChargeComponent implements OnInit, AfterViewInit{

  @ViewChild(StrFieldComponent) strField: StrFieldComponent;
  constructor(private route: ActivatedRoute) {
  }

  id: string;
  chargeModel: ChargeEditModel = {
    charge: new Charge(),
    editMode: EditMode.Create
  };
  fldConfig: StrFieldConfig = {
    placeholder: 'enter text',
    title: 'test text'
  };
  subject: Subject<CodeWithValue[] > = new Subject();

  ngOnInit() {
    this.chargeModel.charge.uin = this.route.snapshot.paramMap.get('id');
    this.chargeModel.charge.sendDate = new Date("2018-08-01");
  }

  ngAfterViewInit(): void {
    let someshit = this.strField.valueObservable.pipe(
      distinctUntilChanged(),
      debounceTime(300),
      map(str => [str, str + ' ' + str, str + ' ' + str + ' ' + str].map((v, i) => new CodeWithValue(v, v))),
    );

    someshit.subscribe(val => this.subject.next(val));
  }
}
