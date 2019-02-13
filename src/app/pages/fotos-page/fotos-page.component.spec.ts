import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosPageComponent } from './fotos-page.component';

describe('FotosPageComponent', () => {
  let component: FotosPageComponent;
  let fixture: ComponentFixture<FotosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
