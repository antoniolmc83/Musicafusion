import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-artistas-page',
  templateUrl: './artistas-page.component.html',
  styleUrls: ['./artistas-page.component.scss']
})
export class ArtistasPageComponent implements OnInit {
  @Output() searchHandler = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  emitSearchHandler(e) {
    console.log("->" + e.target.value);
    this.searchHandler.emit(e.target.value);
  }

}
