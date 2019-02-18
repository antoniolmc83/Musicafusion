import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/cars.model';



@Component({
  selector: 'app-canciones-page',
  templateUrl: './canciones-page.component.html',
  styleUrls: ['./canciones-page.component.scss']
})
export class CancionesPageComponent implements OnInit {

  cars = [ 
    new Car("sss1", 222, "222", "222"),
    new Car("sss2", 222, "222", "222"),
    new Car("sss3", 222, "222", "222"),
    new Car("sss4", 222, "222", "222"),
    new Car("sss5", 222, "222", "222"),
    new Car("sss6", 222, "222", "222"),
    new Car("sss7", 222, "222", "222")
  ];
  cols: any[];
  scrollableCols: any[];
  frozenCols: any[];

  xDivPosition: number;
  yDivPosition: number;
  

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
      
    ];
    this.frozenCols = [
      { field: 'vin', header: 'Vin' }
    ];
  
    this.scrollableCols = [
      { field: 'brand', header: 'Brand' },
      { field: 'year', header: 'Year' },
      { field: 'color', header: 'Color' }
  ];

  this.yDivPosition = 100;
  }

  agregarColumna() {
    console.log("agrgar columna");
    this.cols.push({ field: 'placa', header: 'Placa'});
  }

  clickRow(event){
    console.log(event);

    this.xDivPosition = event.pageX;
    this.yDivPosition = event.pageY;

    console.log ( this.yDivPosition);
  }

  getXDivPosition(){
    return this.xDivPosition + 'px';
  }

  
  getYDivPosition(){
    return this.yDivPosition + 'px';
  }


}
