import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { HintAutocompleteComponent } from './hint-autocomplete/hint-autocomplete.component';
import {
  MatAutocompleteModule, MatButtonModule, MatChipRemove, MatChipsModule, MatFormFieldModule, MatIconModule,
  MatInputModule
} from '@angular/material';
import { ChipsLineComponent } from './chips-line/chips-line.component';
import { StrFieldComponent } from './str-field/str-field.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  declarations: [HintAutocompleteComponent, ChipsLineComponent, StrFieldComponent],
  exports:[ChipsLineComponent, StrFieldComponent]
})
export class CommonUtilsModule { }
