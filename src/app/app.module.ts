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
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { TravelComponent } from './pages/travel/travel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // SportsComponent removed from here since it's standalone
    BusinessComponent,
    FeaturesComponent,
    SportsComponent // Added here as import since it's a standalone component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    TravelComponent,
    HeaderComponent,
    PhotographyComponent,
    ContactComponent,
    PostDetailComponent,
    FashionComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }