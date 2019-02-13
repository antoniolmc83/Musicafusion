import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaItemComponent } from './artista-item.component';

describe('ArtistaItemComponent', () => {
  let component: ArtistaItemComponent;
  let fixture: ComponentFixture<ArtistaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
