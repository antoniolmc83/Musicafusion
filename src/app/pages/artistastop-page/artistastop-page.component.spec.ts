import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistastopPageComponent } from './artistastop-page.component';

describe('ArtistastopPageComponent', () => {
  let component: ArtistastopPageComponent;
  let fixture: ComponentFixture<ArtistastopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistastopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistastopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
