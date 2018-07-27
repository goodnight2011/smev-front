import { NgModule } from '@angular/core';
import { ChargesComponent } from './main/charges.component';
import {CommonUtilsModule} from '../common-utils/common.utils.module';
import { FilterFormComponent } from './filter-form/filter-form.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonUtilsModule,
    BrowserModule,
    CommonModule
  ],
  declarations: [ChargesComponent, FilterFormComponent]
})
export class ChargesModule { }
