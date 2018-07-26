import { NgModule } from '@angular/core';
import { ChargesComponent } from './charges.component';
import {CommonUtilsModule} from '../common-utils/common.utils.module';
import { FilterFormComponent } from './filter-form/filter-form.component';

@NgModule({
  imports: [
    CommonUtilsModule
  ],
  declarations: [ChargesComponent, FilterFormComponent]
})
export class ChargesModule { }
