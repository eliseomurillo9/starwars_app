import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexShowPlanetsComponent } from './index-show-planets/index-show-planets.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexPlanetsComponent } from './index-planets/index-planets.component';
import { IndexVehiclesComponent } from './index-vehicles/index-vehicles.component';
import { IndexShowVehiclesComponent } from './index-show-vehicles/index-show-vehicles.component';
import { NextMissionComponent } from './next-mission/next-mission.component'
import { ReactiveFormsModule } from '@angular/forms';
import { IndexShowPersonnesComponent } from './index-show-personnes/index-show-personnes.component';
import { IndexPersonnesComponent } from './index-personnes/index-personnes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    IndexShowPlanetsComponent,
    IndexPlanetsComponent,
    IndexVehiclesComponent,
    IndexShowVehiclesComponent,
    NextMissionComponent,
    IndexShowPersonnesComponent,
    IndexPersonnesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
