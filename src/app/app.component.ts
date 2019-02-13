import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Musicafusion';

  searchHandler(e){
    console.log("Froma body: " + e);
  }
}


