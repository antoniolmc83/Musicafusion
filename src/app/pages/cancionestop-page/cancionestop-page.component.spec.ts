import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionestopPageComponent } from './cancionestop-page.component';

describe('CancionestopPageComponent', () => {
  let component: CancionestopPageComponent;
  let fixture: ComponentFixture<CancionestopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionestopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionestopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
