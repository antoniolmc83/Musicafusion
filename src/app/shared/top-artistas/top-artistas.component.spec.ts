import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArtistasComponent } from './top-artistas.component';

describe('TopArtistasComponent', () => {
  let component: TopArtistasComponent;
  let fixture: ComponentFixture<TopArtistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopArtistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
