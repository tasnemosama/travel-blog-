import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { SportsComponent } from './pages/sports/sports.component';
import { BusinessComponent } from './pages/business/business.component';
import { FashionComponent } from './pages/fashion/fashion.component';
import { FeaturesComponent } from './pages/features/features.component';
import { TravelComponent } from './pages/travel/travel.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'fashion', component: FashionComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'contact', component: ContactComponent }, // Make sure this route exists
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
