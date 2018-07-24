import { NgModule } from '@angular/core';
import { PaymentsComponent } from './payments.component';
import {CommonUtilsModule} from '../common-utils/common.utils.module';

@NgModule({
  imports: [
    CommonUtilsModule
  ],
  declarations: [PaymentsComponent]
})
export class PaymentsModule { }
