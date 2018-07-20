import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { HintAutocompleteComponent } from './hint-autocomplete/hint-autocomplete.component';
import {
  MatAutocompleteModule, MatButtonModule, MatChipRemove, MatChipsModule, MatFormFieldModule, MatIconModule,
  MatInputModule
} from '@angular/material';
import { ChipsLineComponent } from './chips-line/chips-line.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  declarations: [HintAutocompleteComponent, ChipsLineComponent],
  exports:[ChipsLineComponent]
})
export class CommonUtilsModule { }
