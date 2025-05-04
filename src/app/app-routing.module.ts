import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { SportsComponent } from './pages/sports/sports.component';
import { BusinessComponent } from './pages/business/business.component';
import { FashionComponent } from './pages/fashion/fashion.component';
import { FeaturesComponent } from './pages/features/features.component';
import { StandardPostComponent } from './pages/features/standard-post/standard-post.component';
import { GalleryPostComponent } from './pages/features/gallery-post/gallery-post.component';
import { AudioPostComponent } from './pages/features/audio-post/audio-post.component';
import { LinkPostComponent } from './pages/features/link-post/link-post.component';
import { VideoPostComponent } from './pages/features/video-post/video-post.component';
import { TravelComponent } from './pages/travel/travel.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { ListLayoutComponent } from './pages/home/list-layout/list-layout.component';
import { BoxedLayoutComponent } from './pages/home/boxed-layout/boxed-layout.component';
import { GridLayoutComponent } from './pages/home/grid-layout/grid-layout.component';
import { GridNoSidebarComponent } from './pages/home/grid-no-sidebar/grid-no-sidebar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'fashion', component: FashionComponent },
  // Features routes
  { path: 'features', component: FeaturesComponent },
  { path: 'features/standard', component: StandardPostComponent },
  { path: 'features/gallery', component: GalleryPostComponent },
  { path: 'features/audio', component: AudioPostComponent },
  { path: 'features/link', component: LinkPostComponent },
  { path: 'features/video', component: VideoPostComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'home/list-layout', component: ListLayoutComponent },
  { path: 'home/boxed-layout', component: BoxedLayoutComponent },
  { path: 'home/grid-layout', component: GridLayoutComponent },
  { path: 'home/grid-no-sidebar', component: GridNoSidebarComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
