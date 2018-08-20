import {NgModule} from '@angular/core';
import {ChargesComponent} from './main/charges.component';
import {CommonUtilsModule} from '../common-utils/common.utils.module';
import {FilterFormComponent} from './filter-form/filter-form.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EditChargeComponent} from './edit-charge/edit-charge.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { EditDatesComponent } from './edit-dates/edit-dates.component';
import { RecipientFormComponent } from './recipient-form/recipient-form.component';

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
    MatIconModule,
    MatButtonModule,
  ],
  exports:[RouterModule],
  declarations: [ChargesComponent, FilterFormComponent, EditChargeComponent, EditDatesComponent, RecipientFormComponent]
})
export class ChargesModule {
}
