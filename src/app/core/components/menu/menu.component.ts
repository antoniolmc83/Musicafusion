import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/models/Menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList = [
    new Menu("", "MusicaFusion.com: letras de canciones, videos y fotos de tus artistas", "home", "./assets/home.png"),
    new Menu("Artistas", "Buscar artistas", "artistas"),
    new Menu("Canciones", "Buscar canciones", "canciones"),
    new Menu("Fotos", "Buscar fotos de artistas", "fotos"),
    new Menu("Videos", "Buscar videos de artistas", "videos"),
    new Menu("Artistas Top", "Ranking Artistas Top", "artistas"),
    new Menu("Canciones Top", "Ranking Canciones Top", "canciones")

  ];
  constructor() { }


  ngOnInit() {
  }

}
