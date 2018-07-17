import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Route, RouterModule} from "@angular/router";
import {PaymentsComponent} from "./payments/payments.component";
import {ChargesComponent} from "./charges/charges.component";

const APP_ROUTES: Route = [
  {path: 'payments', component: PaymentsComponent},
  {path: 'charges', component: ChargesComponent},
  {path: '', redirectTo: '/charges'}
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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
