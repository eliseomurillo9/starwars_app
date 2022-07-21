import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexShowPlanetsComponent } from './index-show-planets/index-show-planets.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexPlanetsComponent } from './index-planets/index-planets.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    IndexShowPlanetsComponent,
    IndexPlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
