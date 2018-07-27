import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {PaymentsComponent} from './payments/payments.component';
import {ChargesComponent} from './charges/main/charges.component';
import {PaymentsModule} from './payments/payments.module';
import {ChargesModule} from './charges/charges.module';

const APP_ROUTES: Routes = [
  {path: 'payments', component: PaymentsComponent},
  {path: 'charges', component: ChargesComponent},
  {path: '', redirectTo: '/charges', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      APP_ROUTES,
      {enableTracing: true}
    ),
    PaymentsModule,
    ChargesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
