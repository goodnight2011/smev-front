import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import { HintAutocompleteComponent } from './hint-autocomplete/hint-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material'

@NgModule({
  imports: [
    MatAutocompleteModule.
    BrowserModule,
    BrowserAnimationsModule,
  ],
  declarations: [HintAutocompleteComponent]
})
export class CommonModule { }
