import {NgModule} from '@angular/core';
import {ChargesComponent} from './main/charges.component';
import {CommonUtilsModule} from '../common-utils/common.utils.module';
import {FilterFormComponent} from './filter-form/filter-form.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EditChargeComponent} from './edit-charge/edit-charge.component';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'charges/edit/:id', component: EditChargeComponent},
    ]),
    CommonUtilsModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    MatToolbarModule,
  ],
  exports:[RouterModule],
  declarations: [ChargesComponent, FilterFormComponent, EditChargeComponent]
})
export class ChargesModule {
}
