import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {HintAutocompleteComponent} from './hint-autocomplete/hint-autocomplete.component';
import {
  DateAdapter, MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatAutocompleteModule, MatButtonModule, MatChipRemove, MatChipsModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatNativeDateModule, MatPaginatorModule, MatProgressSpinner, MatProgressSpinnerModule, MatSelectModule, MatSortModule,
  MatSpinner,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import {ChipsLineComponent} from './chips-line/chips-line.component';
import {StrFieldComponent} from './str-field/str-field.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DateFieldComponent} from './date-field/date-field.component';
import {DateFieldAdapter} from './date-field/date-field.adapter';
import {ContAccDirective} from './cont-acc/cont-acc.directive';
import {GenericContComponent} from './generic-cont/generic-cont.component';
import {DataHolderStrComponent} from './data-holder-str/data-holder-str.component';
import { TableFldComponent } from './table-fld/table-fld.component';
import { SelectFldComponent } from './select-fld/select-fld.component';

const DATE_FORMATS = {
  parse: {
    dateInput: {month: 'numeric', year: 'numeric', day: 'numeric'}
  },
  display: {
    dateInput: 'input',
    monthYearLabel: {year: 'numeric', month: 'numeric'},
    dateA11yLabel: {year: 'numeric', month: 'numeric', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'numeric'},
  }
};

@NgModule({
  imports: [
    FormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  entryComponents: [DataHolderStrComponent],
  declarations: [
    HintAutocompleteComponent,
    ChipsLineComponent,
    StrFieldComponent,
    DateFieldComponent,
    ContAccDirective,
    GenericContComponent,
    DataHolderStrComponent,
    TableFldComponent,
    SelectFldComponent
  ],
  exports: [
    ChipsLineComponent,
    StrFieldComponent,
    DateFieldComponent,
    GenericContComponent,
    DataHolderStrComponent,
    TableFldComponent,
    SelectFldComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    {provide: DateAdapter, useClass: DateFieldAdapter},
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS}
  ]
})
export class CommonUtilsModule {
}
