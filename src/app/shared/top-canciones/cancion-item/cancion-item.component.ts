import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from 'src/app/core/models/cancion.model';

@Component({
  selector: 'app-cancion-item',
  templateUrl: './cancion-item.component.html',
  styleUrls: ['./cancion-item.component.scss']
})
export class CancionItemComponent implements OnInit {
  @Input() cancion: Cancion

  constructor() { }

  ngOnInit() {
  }

}
