import { Component, OnInit } from '@angular/core';
import { Artista } from 'src/app/core/models/artista.model';

@Component({
  selector: 'app-top-artistas',
  templateUrl: './top-artistas.component.html',
  styleUrls: ['./top-artistas.component.scss']
})
export class TopArtistasComponent implements OnInit {

  artistas = [
    new Artista("Ariana Grande", "", 1, "./assets/ariana-grande.jpg"),
    new Artista("Pitbull", "", 2, "./assets/pitbull.jpg"),
    new Artista("Bruno Mars", "", 3, "./assets/BRUNO-MARS.jpg"),
    new Artista("Maroon 5", "", 4, "./assets/maroon-5-musicafusion.jpg"),
    new Artista("Calvin Harris", "", 5, "./assets/CALVIN-HARRIS.jpg"),
    new Artista("Madonna", "", 6, "./assets/madonna-musicafusion.jpg"),
    new Artista("Inna", "", 7, "./assets/inna.jpg"),
    new Artista("Ellie Goulding", "", 8, "./assets/ELLIE-GOULDING.jpg"),
    new Artista("Taylor Swift", "", 9, "./assets/Taylor-Swift-musicafusion.jpg"),
    new Artista("Rihanna", "", 10, "./assets/rihanna-musicafusion.jpg"),
  ];

  constructor() { }

  ngOnInit() {
  }

}

