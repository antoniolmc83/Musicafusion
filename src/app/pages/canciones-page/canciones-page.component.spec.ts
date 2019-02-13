import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesPageComponent } from './canciones-page.component';

describe('CancionesPageComponent', () => {
  let component: CancionesPageComponent;
  let fixture: ComponentFixture<CancionesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
