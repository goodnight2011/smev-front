import { NgModule } from '@angular/core';
import { ChargesComponent } from './charges.component';
import {CommonUtilsModule} from '../common-utils/common.utils.module';

@NgModule({
  imports: [
    CommonUtilsModule
  ],
  declarations: [ChargesComponent]
})
export class ChargesModule { }
