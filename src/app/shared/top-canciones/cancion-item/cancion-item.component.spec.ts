import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionItemComponent } from './cancion-item.component';

describe('CancionItemComponent', () => {
  let component: CancionItemComponent;
  let fixture: ComponentFixture<CancionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
