import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/core/models/Menu.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menu: Menu;

  constructor() { }

  ngOnInit() {
  }

}
