import { Component, OnInit } from '@angular/core';
import { Cancion } from 'src/app/core/models/cancion.model';

@Component({
  selector: 'app-top-canciones',
  templateUrl: './top-canciones.component.html',
  styleUrls: ['./top-canciones.component.scss']
})
export class TopCancionesComponent implements OnInit {

  canciones = [
    new Cancion("La Bicicleta (Feat. Shakira)", "Carlos Vives", "", 1, "./assets/carlos-vives-musicafusion.jpg"),
    new Cancion("Outside", "Calvin Harris", "", 2, "./assets/CALVIN-HARRIS.jpg"),
    new Cancion("Por eso te amo", "Rio Roma", "", 3, "./assets/rio-roma-musicafusion.jpg"),
    new Cancion("Mi verdad (Feat. Shakira)", "Mana", "", 4, "./assets/mana.jpg"),
    new Cancion("Time of our Lives", "Pitbull", "", 5, "./assets/pitbull.jpg"),
    new Cancion("Love Me Harder", "Ariana Grande", "", 6, "./assets/ariana-grande.jpg"),
    new Cancion("Animals", "Maroon 5", "", 7, "./assets/maroon-5-musicafusion.jpg"),
    new Cancion("Come &amp; Get It", "Selena Gomez", "", 8, "./assets/selena-gomez-088.jpg"),
    new Cancion("Die Young", "Kesha", "", 9, "./assets/kesha.jpg"),
    new Cancion("Blank Space", "Taylor Swift", "", 10, "./assets/Taylor-Swift-musicafusion.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}

