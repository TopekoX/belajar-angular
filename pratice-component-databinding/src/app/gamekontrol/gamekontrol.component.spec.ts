import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamekontrolComponent } from './gamekontrol.component';

describe('GamekontrolComponent', () => {
  let component: GamekontrolComponent;
  let fixture: ComponentFixture<GamekontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamekontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamekontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
