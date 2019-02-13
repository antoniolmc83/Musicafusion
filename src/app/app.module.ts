import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { ContentComponent } from './core/components/content/content.component';
import { MenuItemComponent } from './core/components/menu/menu-item/menu-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtistasPageComponent } from './pages/artistas-page/artistas-page.component';
import { CancionesPageComponent } from './pages/canciones-page/canciones-page.component';
import { FotosPageComponent } from './pages/fotos-page/fotos-page.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';
import { ArtistastopPageComponent } from './pages/artistastop-page/artistastop-page.component';
import { CancionestopPageComponent } from './pages/cancionestop-page/cancionestop-page.component';
import { TopCancionesComponent } from './shared/top-canciones/top-canciones.component';
import { TopArtistasComponent } from './shared/top-artistas/top-artistas.component';
import { ArtistaItemComponent } from './shared/top-artistas/artista-item/artista-item.component';
import { CancionItemComponent } from './shared/top-canciones/cancion-item/cancion-item.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    MenuItemComponent,
    HomePageComponent,
    ArtistasPageComponent,
    CancionesPageComponent,
    FotosPageComponent,
    VideosPageComponent,
    ArtistastopPageComponent,
    CancionestopPageComponent,
    TopCancionesComponent,
    TopArtistasComponent,
    ArtistaItemComponent,
    CancionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
