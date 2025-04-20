import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { SportsComponent } from './pages/sports/sports.component';
import { BusinessComponent } from './pages/business/business.component';
import { FashionComponent } from './pages/fashion/fashion.component';
import { FeaturesComponent } from './pages/features/features.component';
import { RouterModule } from '@angular/router';
// Change this line if needed
import { ContactComponent } from './pages/contact/contact.component'; // lowercase 'contact'
import { FormsModule } from '@angular/forms';
import { TravelComponent } from './pages/travel/travel.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportsComponent,
    BusinessComponent,
    FashionComponent,
    // ContactComponent removed from here
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    TravelComponent,
    HeaderComponent,
    PhotographyComponent,
    ContactComponent // Added here as import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }