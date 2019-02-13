import { Component, OnInit, Input } from '@angular/core';
import { Artista } from 'src/app/core/models/artista.model';

@Component({
  selector: 'app-artista-item',
  templateUrl: './artista-item.component.html',
  styleUrls: ['./artista-item.component.scss']
})
export class ArtistaItemComponent implements OnInit {
  @Input() artista: Artista
  
  constructor() { }

  ngOnInit() {
  }

}
