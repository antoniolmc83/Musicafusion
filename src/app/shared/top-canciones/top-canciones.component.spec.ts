import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCancionesComponent } from './top-canciones.component';

describe('TopCancionesComponent', () => {
  let component: TopCancionesComponent;
  let fixture: ComponentFixture<TopCancionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCancionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
