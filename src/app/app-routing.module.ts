import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtistasPageComponent } from './pages/artistas-page/artistas-page.component';
import { CancionesPageComponent } from './pages/canciones-page/canciones-page.component';
import { FotosPageComponent } from './pages/fotos-page/fotos-page.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'artistas',
    component: ArtistasPageComponent
  },
  {
    path: 'canciones',
    component: CancionesPageComponent
  },
  {
    path: 'fotos',
    component: FotosPageComponent
  },
  {
    path: 'videos',
    component: VideosPageComponent
  },
  {
    path: 'artistastop',
    component: ArtistasPageComponent
  },
  {
    path: 'cancionestop',
    component: CancionesPageComponent
  }          

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
