import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanjilComponent } from './ganjil.component';

describe('GanjilComponent', () => {
  let component: GanjilComponent;
  let fixture: ComponentFixture<GanjilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanjilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanjilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
