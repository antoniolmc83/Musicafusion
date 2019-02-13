import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/cars.model';



@Component({
  selector: 'app-canciones-page',
  templateUrl: './canciones-page.component.html',
  styleUrls: ['./canciones-page.component.scss']
})
export class CancionesPageComponent implements OnInit {

  cars = [ 
    new Car("sss", 222, "222", "222"),
    new Car("sss", 222, "222", "222"),
    new Car("sss", 222, "222", "222")
  ];

  cols: any[];
  

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  agregarColumna() {
    console.log("agrgar columna");
    this.cols.push({ field: 'placa', header: 'Placa'});
  }

}
