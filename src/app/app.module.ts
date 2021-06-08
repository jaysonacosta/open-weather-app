import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';
import { HourlyForecastCardComponent } from './components/hourly-forecast-card/hourly-forecast-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ForecastCardComponent,
    HourlyForecastCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
